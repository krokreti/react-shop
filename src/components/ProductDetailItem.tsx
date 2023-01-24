import { Rating, Stack } from '@mui/material';
import Grid from '@mui/material/Grid'
import Product from "../models/Product";
import NumberToCurrency from './helpers/NumberToCurrency';
import Card from './shared/Card';
import CustomButton from './shared/CustomButton';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { cart, cartActions } from '../store/cart-slice';

const ProductDetailItem:React.FC<{product: Product | undefined}> = (props) => {
    const dispatch = useAppDispatch()
    const cartArray = useAppSelector(cart);
    let rating: number = 0;
    let price: number = 0;
    if(props.product) {
        rating = props.product.rating;
        price = props.product.price;
    }

    const addToCart = (productItem: Product | undefined) => {
        if(productItem) {
            dispatch(cartActions.addToCart(productItem))
        }

        console.log(cartArray)
    }
    
    return (
        <Card>

            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <h1>{props.product?.title}</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={props.product?.thumbnail} alt={props.product?.title} style={{ borderRadius:'5px', width:'100%' }}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction={'column'} gap={2}>
                        <Stack direction={'row'} >
                            About {props.product?.title}:
                        </Stack>
                        <Stack direction={'row'} >
                            <h4 style={{ textAlign:'start' }}>{props.product?.description}</h4>
                        </Stack>
                        <Stack direction={'row'}>
                            Rating:
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <Rating value={rating} precision={0.5} readOnly/>
                            <span style={{ fontWeight:'bold' }}>{props.product?.rating}</span>
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <span>Brand:</span> <h4>{props.product?.brand}</h4>
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <span>Discount:</span> <h4>{props.product?.discountPercentage}%</h4>
                        </Stack>
                        <Stack direction={'row'} gap={1}>
                            <span>Total price:</span> 
                            <h4>{NumberToCurrency(price)}</h4>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={12}>
                    <CustomButton text='add to cart' onClick={ addToCart.bind(null, props.product) } endIcon={<ShoppingCartCheckoutIcon/>} sx={{ width:'100%' }}/>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductDetailItem;