import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import useHttp from "../../hooks/use-http";
import Product from "../../models/Product";

const ProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest({
            url: "https://dummyjson.com/products",
        },
            (data: { limit: number, products: Product[], skip: number, total: number}) => {
                setProductList(data.products)
            }
        )

    }, [sendRequest])

 return (<Container>
 <Box>
     <Stack my={"2em"} gap={2}>
         <h1>Products</h1>
         <h3>Here you find the best products!</h3>
     </Stack>
     <ProductCard productList={productList}/>
 </Box>
</Container>)
}

export default ProductList;