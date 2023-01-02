const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({ message: "Product Not Found" });
    }
});

module.exports = { getProducts, getProduct }

