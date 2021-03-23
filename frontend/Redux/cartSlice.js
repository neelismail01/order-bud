import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './constants';

// ACTIONS
export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}


// REDUCER
const initialState = [];
export const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            return state.filter(cartItem => cartItem.id !== action.payload)
        case CLEAR_CART:
            return state = []
    }
    return state;
}


// SELECTOR
export const selectCartItems = (state) => state.cartItems;