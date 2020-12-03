import {CartActionTypes} from "./cart.types";

const INITIAL_STATE ={
    cartVisibilityHidden: true
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                cartVisibilityHidden: !state.cartVisibilityHidden
            }
        default:
            return state;
    }
}

export default cartReducer;