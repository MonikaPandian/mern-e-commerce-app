const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const productRoutes = require('./routes/productsRoute');
const { errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/usersRoute');
const orderRoutes = require('./routes/orderRoute');
const path = require('path');
const cors = require('cors');

//dotenv config
dotenv.config();

//connecting to mongodb database
connectDB();
const app = express();

//middleware bodyparser
app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
})

// -------------Deployment--------------- //
__dirname = path.resolve();
const buildPath = path.join(__dirname, "/frontend/build");

app.use(express.static(buildPath))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
})
// -------------Deployment--------------- //

app.use(errorHandler);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});