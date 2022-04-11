import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const rootStore = configureStore({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
})

export default rootStore;