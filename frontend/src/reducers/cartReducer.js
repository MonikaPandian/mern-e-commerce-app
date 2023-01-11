import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [], wishlist: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.productId === item.productId)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.productId === existItem.productId ? item : x)
                }
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.productId !== action.payload)
            };
        case WISHLIST_ADD_ITEM:
            const prod = action.payload
            console.log(prod)
            let existProd = state.wishlist.find(x => x.productId === prod.productId)
            console.log(existProd)
            if (existProd) {
                return {
                    ...state,
                    wishlist: state.wishlist.map(x => x.productId === existItem.productId ? prod : x)
                }
            } else {
                return {
                    ...state, wishlist: [...state.wishlist, prod]
                };
            }
        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishlist: state.wishlist.filter((x) => x.productId !== action.payload)
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload }
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            }
        default:
            return state;
    }
}

