import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import { totalAmount } from '../../store/cart-slice';

const CartAmountButton = () => {
    const cartAmount = useAppSelector(totalAmount);
    // const cart2 = useAppSelector(state => state.cart.total)
    const navigate = useNavigate();

    const cartButtonHandler = () => {
        if(cartAmount===0) {
            return
        }
        navigate("/cart")
    }

    return (
        <>
            <IconButton onClick={cartButtonHandler} >
                <Badge badgeContent={cartAmount} color="warning">
                    <ShoppingCartIcon sx={{ color: 'white' }}/>
                </Badge>
            </IconButton>
        </>
    )
}

export default CartAmountButton;