const express = require('express');
const { addOrderItem, getOrderById, updateOrderToPaid, getMyOrders } = require('../controllers/orderController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router();

//get all orders
router.route('/my-orders').get(protect, getMyOrders);

//create new order
router.route('/').post(protect, addOrderItem);

//get order by id
router.route("/:id").get(protect, getOrderById);

//create new order
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;