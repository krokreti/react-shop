import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import useHttp from "../../hooks/use-http";
import Product from "../../models/Product";

const ProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest({
            // url: "https://dummyjson.com/products/1",
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
         <h1>Home</h1>
         <h3>Here you find the best products!</h3>
     </Stack>
     <Stack direction={'row'} display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
         {/* <ProductItem product={product}/> */}
         {
             productList.map((product) => 
             <Link to={`${product.id}` } key={product.id} style={{ textDecoration:'none' }}>
                 <ProductItem product={product}/>
             </Link>
             )
         }
     </Stack>
 </Box>
</Container>)
}

export default ProductList;