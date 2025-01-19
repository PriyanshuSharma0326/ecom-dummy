import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialStateValue,
    reducers: {
        addToCart: (state, action) => {
            const foundItem = state.cart.find(product => product.id === action.payload.id);
        
            if (foundItem) {
                foundItem.quantity += 1;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const filteredList = state.cart.filter(product => product.id !== action.payload);
            state.cart = filteredList;
        },
        decreaseCartItemQuantity: (state, action) => {
            const foundItem = state.cart.find(product => product.id === action.payload);
            if (foundItem) {
                foundItem.quantity -= 1;
            }
        }
    },
});

export const {
    addToCart,
    removeFromCart,
    decreaseCartItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
