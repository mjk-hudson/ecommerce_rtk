import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state,action){},
        removeItemFromCart(state,action){},
        clearCart(state){},
        increaseItemQuantity(state,action){},
        decreaseItemQuantity(state,action){},
});


