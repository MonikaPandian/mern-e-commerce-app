import { productDetailsReducer, productListReducer } from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateDetailsReducer, userForgotPasswordReducer, userResetPasswordReducer } from "./reducers/userReducer";
import { orderCreateReducer, orderDetailsReducer, orderListReducer, orderPayReducer } from "./reducers/orderReducer";

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const wishListItemsFromStorage = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []

const paymentMethodFromStorage = localStorage.getItem('PaymentMethod') ? JSON.parse(localStorage.getItem('PaymentMethod')) : ""

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateDetailsReducer,
    orderCreate: orderCreateReducer,
    orderPay: orderPayReducer,
    orderDetails: orderDetailsReducer,
    orderList: orderListReducer,
});

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
        wishlist: wishListItemsFromStorage,
    },
    userLogin: {
        userInfo: userInfoFromStorage
    },
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
