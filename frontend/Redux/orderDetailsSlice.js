import { SET_ADDRESS, CLEAR_ADDRESS } from './constants';

// ACTIONS
export const setAddress = (payload) => {
    return {
        type: SET_ADDRESS,
        payload
    }
}

export const clearAddress = () => {
    return {
        type: CLEAR_ADDRESS
    }
}


// REDUCER
const initialState = [];
export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case CLEAR_ADDRESS:
            return state = {}
    }
    return state;
}


// SELECTOR
export const selectAddress = (state) => state.orderDetails.address;
