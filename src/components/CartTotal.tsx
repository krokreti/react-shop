import { Paper, Stack } from '@mui/material';
import CustomLoadingButton from './shared/CustomLoadingButton';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import React, { useState } from 'react'
import NumberToCurrency from './helpers/NumberToCurrency';

const CartTotal:React.FC<{total: number}> = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const ConfirmPaymentButtonHandler = () => {

    }

    return (<>
        <Paper elevation={6} sx={{  padding: '1em', position: 'fixed', bottom:'0', width:'100%', borderRadius:'0' }} > 
            <Stack direction={'column'} gap={2}>
                <span><strong>Total: {NumberToCurrency(props.total)}</strong></span>
                <CustomLoadingButton text='PAY NOW!' endIcon={<CreditCardIcon/>} isLoading={isLoading} onClick={ConfirmPaymentButtonHandler} color={'success'}/>
            </Stack>
        </Paper>
    </>)
}

export default CartTotal;