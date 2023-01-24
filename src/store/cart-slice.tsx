import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import CartProduct from "../models/CartProduct";
import Product from "../models/Product";

interface cartState {
    cart: CartProduct[],
    total: number,
}

const initialCartState: cartState = {
    cart: [],
    total: 0
}

const addItemToCart = (state: cartState, action: PayloadAction<Product>) => {
    let item: CartProduct = {
        product: action.payload,
        amount: 1
    };
    
    if(state.cart.length===0) {
        state.cart.push(item)
    } else {
        let index: number = state.cart.findIndex(product => product.product.id === action.payload.id)
        if(index===-1) {
            state.cart.push(item)
        } else {
            state.cart[index].amount++;
        }
    }
}

const removeItemFromCart = (state: cartState, action: PayloadAction<number>) => {
    const index = state.cart.findIndex((product) => product.product.id === action.payload)
    if(state.cart[index].amount==1) {
        state.cart.splice(index, 1)
    } else {
        state.cart[index].amount--;
    }
}

const returnTotalAmount = (state: cartState): number => {
    var total = state.cart.reduce((total, currentValue) => (total + currentValue.amount), 0)

    return total;
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart: addItemToCart,
        removeFromCart: removeItemFromCart,
    }
})

export const cartActions = cartSlice.actions;
export const totalAmount = (state: RootState) => returnTotalAmount(state.cart)
export const cart = (state: RootState) => state.cart.cart
export default cartSlice.reducer;