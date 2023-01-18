import { Box, Stack, Paper, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import useHttp from "../../hooks/use-http";
import Product from "../../models/Product";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SellIcon from '@mui/icons-material/Sell';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

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
            setTrending(data.products);
        })
    }, [sendRequest])

    useEffect(() => {
        sendRequest({ url: "https://dummyjson.com/products?skip=3&limit=3" },
        (data: { limit: number, products: Product[], skip: number, total: number}) => {
            setHot(data.products);
        })
    }, [sendRequest])

    useEffect(() => {
        sendRequest({ url: "https://dummyjson.com/products?skip=6&limit=3" },
        (data: { limit: number, products: Product[], skip: number, total: number}) => {
            setComingSoon(data.products);
        })
    }, [sendRequest])

    return (
        <Box paddingTop={'1em'} color={'white'}>
            <h1>Recommended products for you</h1>
            <Stack direction={"column"} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={4} color={"white"} gap={4}>
                <Paper elevation={4} sx={{ maxWidth:'45em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                    <ProductCard productList={trending} title="Trending" seeMore={true} icon={<SellIcon style={{color: "goldenrod"}}/>} loading={isLoading}/>
                </Paper>

                <Paper elevation={4} sx={{ maxWidth:'45em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                    <ProductCard productList={hot} title="Hot" seeMore={true} icon={<WhatshotIcon style={{ color: 'red' }}/>} loading={isLoading}/>
                </Paper>

                <Paper elevation={4} sx={{ maxWidth:'45em', width:'100%', display:'flex', justifyContent:'center', flexWrap:'wrap', padding:3 }}> 
                    <ProductCard productList={comingSoon} title="Coming soon..." seeMore={true} icon={<AccessAlarmIcon style={{ color: 'green'}}/>} loading={isLoading}/>
                </Paper>
            </Stack>
        </Box>
    )
}

export default Home;