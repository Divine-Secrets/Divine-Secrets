// appRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/home', productController.getAllProducts);
router.get('/categorys/:category', productController.getProductsByCategory);
router.get('/products_details/:id', productController.getProductById);

module.exports = router;
