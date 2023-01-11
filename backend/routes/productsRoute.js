const express = require('express');
const { getProducts, getProduct } = require('../controllers/productsController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

//get route for all products
router.route('/products').get(getProducts);

//get route for a single product
router.route('/products/:id').get(getProduct);

module.exports = router;