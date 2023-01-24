import CartProduct from "../models/CartProduct"
import { Grid, Stack } from "@mui/material"
import CustomButton from "./shared/CustomButton"
import Input from "./shared/Input"
import React from "react"

const CartItem: React.FC<{
    cartProduct: CartProduct, 
    addButton: () => void, 
    removeButton: () => void
    }> = ({
            cartProduct, 
            addButton, 
            removeButton
        }) => {

    const addButtonHandler = () => {
        addButton();
    }

    const removeButtonHandler = () => {
        removeButton();
    }

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <Grid container gap={2}> 
            <Grid item xs={4} md={4} >
                <img src={cartProduct.product.thumbnail} alt={cartProduct.product.title} style={{ width:'100%',  borderRadius:'5px' }}/>
            </Grid>
            <Grid item xs={7} md={7} >
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} gap={1}>
                    <span>{cartProduct.product.title}</span>
                    <Stack direction={'row'} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                        <CustomButton text="-" color="error" onClick={removeButtonHandler}/>
                        <Input 
                            id={'amount'} 
                            label={""} 
                            onChange={inputChangeHandler} 
                            value={cartProduct.amount} 
                            inputProps={{
                                readOnly: true, 
                                style: { 
                                    textAlign:'center'
                                } 
                            }} 
                            sx={{ 
                                width:'4em', 
                                height:'2.5em' 
                            }}
                        />
                        <CustomButton text="+" color="error" onClick={addButtonHandler}/>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default CartItem