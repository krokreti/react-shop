import { Stack } from "@mui/material";
import CartItem from "../../components/CartItem";
import Card from "../../components/shared/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import Product from "../../models/Product";
import { cart, cartActions } from "../../store/cart-slice";
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Cart:React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartArray = useAppSelector(cart);

    useEffect(() => {
        if(cartArray.length===0) {
            navigate("/")
        }
    }, [cartArray])

    const addButtonHandler = (product: Product) => {
        dispatch(cartActions.addToCart(product))
    }

    const removeButtonHandler = (id: number) => {
        dispatch(cartActions.removeFromCart(id))
    }

    return (
    <>
        <Card>
            <h1>Shop Cart</h1>
            <Stack direction={'column'} gap={2}>
                {cartArray.map(cartItem => (
                    <CartItem 
                        key={cartItem.product.id} 
                        cartProduct={cartItem} 
                        addButton={addButtonHandler.bind(null, cartItem.product)}
                        removeButton={removeButtonHandler.bind(null, cartItem.product.id)}
                        />
                ))}
            </Stack>
        </Card>
    </>)

}

export default Cart;