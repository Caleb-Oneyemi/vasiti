const Product = require('../models/product');
const ProductVariety = require('../models/product-variety');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body.product);

    const varities = req.body.productVareity;
    varities.map((v) => {
      return (v.productId = product.id);
    });

    await ProductVariety.bulkCreate(varities);

    res.status(201).json({
      message: 'Product created successfully',
    });
  } catch (err) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: [ProductVariety] });
    res.render('products', {
      products,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [ProductVariety],
    });
    res.render('product', {
      product,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json({
      message: 'Product updated successfully',
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const updateProductVariety = async (req, res) => {
  try {
    await ProductVariety.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json({
      message: 'Product variety updated successfully',
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const removeProductVariety = async (req, res) => {
  try {
    await ProductVariety.destroy(
      { where: { id: req.params.id } },
      { truncate: false }
    );
    res.status(200).json({
      message: 'Product variety deleted successfully',
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateProductVariety,
  removeProductVariety,
};
