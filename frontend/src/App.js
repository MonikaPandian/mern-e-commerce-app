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
import PaymentMethodPage from './pages/PaymentMethodPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import HomeEssentialProducts from './pages/HomeEssentialProducts';
import BeautyProducts from './pages/BeautyProducts';
import HeadphoneProducts from './pages/HeadphoneProducts';
import MyOrdersPage from './pages/MyOrdersPage';
import Wishlist from './pages/Wishlist';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

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
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password/:id/:token" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/place-order" element={<PlaceOrderPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/home-essentials" element={<HomeEssentialProducts />} />
            <Route path="/beauty-products" element={<BeautyProducts />} />
            <Route path="/headphones" element={<HeadphoneProducts />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<PaymentMethodPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order/:orderId" element={<OrderPage />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
