const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  updateProductVariety,
  removeProductVariety,
} = require('../controllers/product-controller');

const router = express.Router();

router.post('/products', createProduct);

router.get('/products', getProducts);

router.get('/products/:id', getProductById);

router.patch('/products/:id', updateProduct);

router.patch('/products/vareity/:id', updateProductVariety);

router.delete('/products/vareity/:id', removeProductVariety);

module.exports = router;
