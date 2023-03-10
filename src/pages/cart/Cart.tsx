import { Stack } from "@mui/material";
import CartItem from "../../components/CartItem";
import CartTotal from "../../components/CartTotal";
import Card from "../../components/shared/Card";
import Product from "../../models/Product";
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { cart, cartActions, totalValue } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";

const Cart:React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const cartArray = useAppSelector(cart);
    const totalAmountValue = useAppSelector(totalValue);

    useEffect(() => {
        if(cartArray.length===0) {
            navigate("/")
        }
    }, [cartArray, navigate])

    const addButtonHandler = (product: Product) => {
        dispatch(cartActions.addToCart(product))
    }

    const removeButtonHandler = (id: number) => {
        dispatch(cartActions.removeFromCart(id))
    }

    return (
    <>
        <Card sx={{ marginBottom:'6em' }}>
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
        <CartTotal total={totalAmountValue}/>
    </>)

}

export default Cart;