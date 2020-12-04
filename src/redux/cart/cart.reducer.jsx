import {CartActionTypes} from "./cart.types";
import {addItemToCart, removeItemFromCart} from "./cart.util";

const INITIAL_STATE ={
    cartVisibilityHidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                cartVisibilityHidden: !state.cartVisibilityHidden
            }
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cartReducer;