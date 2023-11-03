

const express = require('express');
const app = express();
const port = 3000;
const db =require ('./db');
app.use(bodyParser.json());
const productController = require('./controllers/productController');
const bodyParser = require('body-parser');
const cartController = require('./controllers/cartController');

app.get('/home', productController.getAllProducts);
app.get('/categorys/:category', productController.getProductsByCategory);
app.get('/products_details/:id', productController.getProductById);
app.post('/add-to-cart', cartController.addToCart);
app.get('/user-cart/:userId', cartController.getUserCartWithImages);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










