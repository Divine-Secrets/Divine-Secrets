// productController.js
const productModel = require('../models/productModel');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await productModel.getAllProducts();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting products');
    }
  }

  async getProductsByCategory(req, res) {
    try {
      const category = req.params.category;
      const products = await productModel.getProductsByCategory(category);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error in getting products from the category');
    }
  }

  async getProductById(req, res) {
    try {
      const productId = req.params.id;
      const product = await productModel.getProductById(productId);
      res.json(product);
    } catch (error) {
      console.error('Failed to get one product: ', error);
      res.status(500).json({ error: 'Failed to get one product' });
    }
  }
}

module.exports = new ProductController();
