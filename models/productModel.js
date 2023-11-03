const pool = require('../db');

class ProductModel {
  async getAllProducts() {
    try {
      const result = await pool.query('SELECT * FROM products');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getProductsByCategory(category) {
    try {
      const query = 'SELECT * FROM products WHERE category = $1';
      const result = await pool.query(query, [category]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const query = 'SELECT * FROM products WHERE product_id = $1';
      const result = await pool.query(query, [productId]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductModel();