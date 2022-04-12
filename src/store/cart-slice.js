import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    total: newItem.price,
                    quantity: 1
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.total + action.payload.price;
            }
        },
        removeItem(state, action) {
            const deletingItem = state.items.filter(item => item.id === action.payload);
            state.totalQuantity--;
            if(deletingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
            } else {
                deletingItem.quantity--;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;