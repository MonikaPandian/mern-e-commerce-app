const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const productRoutes = require('./routes/productsRoute');
const { errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/usersRoute');

//dotenv config
dotenv.config();

connectDB();
const app = express();

//middleware bodyparser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Node server for E-commerce app</h1>');
})

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});