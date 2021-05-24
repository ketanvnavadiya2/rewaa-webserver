const express = require('express');
const productController = require('../controllers/inventory');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /inventory/products
router.get('/products', isAuth, productController.getProducts);

// POST /inventory/product
router.post('/product', isAuth, productController.addProduct)

// DELETE /inventory/product
router.delete('/product/:productId', isAuth, productController.deleteProduct)

// GET /inventory/product
router.get('/product/:productId', isAuth, productController.getProduct)

// PUT /inventory/product
router.put('/product/:productId', isAuth, productController.updateProduct)


module.exports = router;