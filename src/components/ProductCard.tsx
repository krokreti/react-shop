import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Product from "../models/Product";
import ProductItem from "./ProductItem";

const ProductCard: React.FC<{productList: Product[]}> = (props) => {
    return (
        <Stack direction={'row'} display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
        {
            props.productList.map((product) => 
            <Link to={`${product.id}` } key={product.id} style={{ textDecoration:'none' }}>
                <ProductItem product={product}/>
            </Link>
            )
        }
    </Stack>
    )
}

export default ProductCard;