// const multer = require("multer");
// const express = require('express');
// const app = express();
// const port = 3000;
// const db =require ('./db');
// // You should use pool.query instead of db.query
// app.get('/home', async (req, res) => {
//     try {
//       let result = await pool.query(`SELECT products.product_name, products.description, products.price, products.category
//       FROM products `);
//       res.json(result.rows);
//     }
//     catch (err) {
//       console.error(err);
//       res.status(500).send('error in getting the home');
//     }
// });

// app.get('/categorys/:category', async (req, res) => {
//     try {
        
//         const query = 'SELECT * FROM products WHERE category = $1';
//         const categoryName = req.params.category;
//         const result = await pool.query(query, [categoryName]);
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error in getting products from the category');
//     }
// });
// // Corrected route path
// app.get('/products_details/:id', async (req, res) => {
//     try {
//         const query = 'SELECT * FROM products WHERE product_id = $1';
//         const productId = req.params.id;
//         const result = await pool.query(query, [productId]);
//         res.json(result.rows);
//     } catch (error) {
//         console.error('Failed to get one product: ', error);
//         res.status(500).json({ error: 'Failed to get one product' });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const appRoutes = require('./routes/appRoutes');

app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});