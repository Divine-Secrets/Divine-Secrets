// models/productModel.js
const pool = require('../db');

async function getAllProducts() {
    try {
        let result = await pool.query('SELECT product_name, description, price, category FROM products');
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getProductsByCategory(categoryName) {
    try {
        const query = 'SELECT * FROM products WHERE category = $1';
        const result = await pool.query(query, [categoryName]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getProductById(productId) {
    try {
        const query = 'SELECT * FROM products WHERE product_id = $1';
        const result = await pool.query(query, [productId]);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
};