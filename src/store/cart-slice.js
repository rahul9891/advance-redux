import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.filter(item => item.id === action.payload.id);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.title,
                    price: existingItem.price +  action.payload.price,
                    quantity: action.payload.quantity + 1
                })
            } else {
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.price += action.payload.price;
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