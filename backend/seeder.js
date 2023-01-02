const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const User = require('./models/userModel');
const Product = require('./models/productModel')
const Order = require('./models/orderModel');
const products = require("./data/products");
const connectDB = require('./config/config');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleData)
        console.log('Data imported!!!');
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};

const dataDestroy = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data Destroyed!')
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
}

if (process.argv[2] === "-d") {
    dataDestroy();
}
else {
    importData();
}

