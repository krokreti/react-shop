import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import useHttp from "../../hooks/use-http";
import Product from "../../models/Product";

const Home = () => {
    // const auth = useAppSelector(authStatus);
    // const teste = useAppSelector(state => state.auth.isLoggedIn)
    // const loggedUser = useAppSelector(state => state.auth.token)
    // const dispatch = useAppDispatch();
    // dispatch(authActions.login())
    // console.log(teste)
    // const [product, setProduct] = useState<Product>();
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

    return (
        <Container>
            <Box border={"1px solid red;"}>
                    <h1>Home</h1>
                    <Stack border={"1px solid yellow;"} direction={'row'} display={"flex"} flexWrap={"wrap"} gap={2} >
                        {/* <ProductItem product={product}/> */}
                        {
                            productList.map((product) => <ProductItem key={product.id} product={product}/>)
                        }
                    </Stack>
            </Box>
        </Container>
    )
}

export default Home;