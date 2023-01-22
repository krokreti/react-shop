import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import CartProduct from "../models/CartProduct";

interface cartState {
    cart: CartProduct[],
    total: number,
}

const initialCartState: cartState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart() {

        },
        removeFromCart() {

        }
    }
})

export const cartActions = cartSlice.actions;
export const totalAmount = (state: RootState) => state.cart.total
export default cartSlice.reducer;