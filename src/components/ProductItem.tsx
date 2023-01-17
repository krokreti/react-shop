import { Chip, makeStyles, Paper, Stack } from "@mui/material";
import Product from "../models/Product";
import StarIcon from '@mui/icons-material/Star';


const ProductItem: React.FC<{product: Product | undefined}> = (props) => {

    return (
        <Paper
            elevation={3}
            sx={{ width:'10em', transition:'.5s',
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >   
            <Stack direction={"column"} display={"flex"} justifyContent={"space-between"} height={"15em"} >
                <Stack direction={"column"}>
                    <img src={props.product?.thumbnail} alt={props.product?.title} loading="lazy" style={{ width: '100%', borderTopRightRadius: '3px', borderTopLeftRadius: '3px', height: '7em' }}/>
                    <span style={{ padding: '0.2em 0'}}><strong>{props.product?.title}</strong></span>
                    <span style={{ textAlign:"left", padding:"0 1em", width:"calc(100%)", overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>{props.product?.description}</span>
                </Stack>
                <Stack display={"flex"} direction={"row"} alignItems={"center"} justifyContent={"space-between"} margin={1}>
                    <Chip 
                        avatar={<StarIcon style={{ color: '#fff' }} />}
                        label={props.product?.rating} 
                        sx={{ backgroundColor:'#ffc000', color:'white', width:'max-content' }}
                    />
                    |
                    <span>
                        Sold {props.product?.stock}
                    </span>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default ProductItem;