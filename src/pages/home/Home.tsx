import { Box, Container, Stack, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    const [trending, setTrending] = useState<Product[]>([]);
    const [hot, setHot] = useState<Product[]>([]);
    const [comingSoon, setComingSoon] = useState<Product[]>([]);

    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        
    }, [])

    return (
        <Box >
            <Stack direction={"column"} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={4} >

            <h1>Trending</h1>
            <Paper elevation={3} sx={{ maxWidth:'50em', width:'100%', display:'flex', justifyContent:'space-evenly', flexWrap:'wrap' }}> 
                
            </Paper>

            <h1>Hot</h1>

            <h1>Coming soon...</h1>

            </Stack>
        </Box>
    )
}

export default Home;