import { Box, Stack, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import useHttp from "../../hooks/use-http";
import Product from "../../models/Product";

const Home = () => {
    // const auth = useAppSelector(authStatus);
    // const teste = useAppSelector(state => state.auth.isLoggedIn)
    // const loggedUser = useAppSelector(state => state.auth.token)
    // const dispatch = useAppDispatch();
    // dispatch(authActions.login())
    // console.log(teste)
    const [trending, setTrending] = useState<Product[]>([]);
    const [hot, setHot] = useState<Product[]>([]);
    const [comingSoon, setComingSoon] = useState<Product[]>([]);

    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        sendRequest({ url: "https://dummyjson.com/products?limit=3" },
        (data: { limit: number, products: Product[], skip: number, total: number}) => {
            console.log(data)
            setTrending(data.products);
        })
    }, [])

    return (
        <Box >
            <Stack direction={"column"} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={4} >

            <h1>Trending</h1>
            <Paper elevation={4} sx={{ maxWidth:'50em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                <ProductCard productList={trending}/>
            </Paper>

            <h1>Hot</h1>
            <Paper elevation={4} sx={{ maxWidth:'50em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                <ProductCard productList={trending}/>
            </Paper>

            <h1>Coming soon...</h1>
            <Paper elevation={4} sx={{ maxWidth:'50em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                <ProductCard productList={trending}/>
            </Paper>

            </Stack>
        </Box>
    )
}

export default Home;