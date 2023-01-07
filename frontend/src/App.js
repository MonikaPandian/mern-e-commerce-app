import './App.css';
import { Container } from "react-bootstrap";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import HomeEssentialProducts from './pages/HomeEssentialProducts';
import BeautyProducts from './pages/BeautyProducts';
import HeadphoneProducts from './pages/HeadphoneProducts';

function App() {
  return (
    <Router>
      <Header />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/place-order" element={<PlaceOrderPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/home-essentials" element={<HomeEssentialProducts />} />
            <Route path="/beauty-products" element={<BeautyProducts />} />
            <Route path="/headphones" element={<HeadphoneProducts />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order/:orderId" element={<OrderPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
