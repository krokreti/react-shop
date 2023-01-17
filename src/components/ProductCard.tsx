import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Product from "../models/Product";
import ProductItem from "./ProductItem";

const ProductCard: React.FC<{productList: Product[], title?: string, seeMore?:boolean, icon?:React.ReactNode}> = (props) => {
    return (
        <Stack direction={"column"} gap={4}>
            {props.title && (
                <h1> {props.title} {props.icon} </h1>
            )}
        
            <Stack direction={'row'} display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
                {
                    props.productList.map((product) => 
                    <Link to={`${product.id}` } key={product.id} style={{ textDecoration:'none' }}>
                        <ProductItem product={product}/>
                    </Link>
                    )
                }
            </Stack>
            {props.seeMore && (
                <Link to="/products">
                    See more... 
                </Link>
            )}
        </Stack>
    )
}

export default ProductCard;