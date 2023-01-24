import CartProduct from "../models/CartProduct"
import { Grid, Paper, Stack } from "@mui/material"
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
        <Paper elevation={3} >
            <Grid container gap={2}> 
                <Grid item xs={12} md={4} >
                    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100%'} >
                        <img src={cartProduct.product.thumbnail} alt={cartProduct.product.title} style={{ width:'100%',  borderRadius:'5px' }}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7} sx={{ paddingBottom: { xs: '1em', md:'0' } }}>
                    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} height={'100%'} gap={1}>
                        <span>{cartProduct.product.title}</span>
                        <Stack direction={'row'} display={"flex"} justifyContent={'center'} alignItems={'center'}>
                            <CustomButton text="-" color="error" onClick={removeButtonHandler} />
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
        </Paper>
    )
}

export default CartItem