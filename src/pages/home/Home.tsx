import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import useHttp from "../../hooks/use-http";
import { authActions, authStatus } from "../../store/auth-slice";

const Home = () => {
    const auth = useAppSelector(authStatus);
    const teste = useAppSelector(state => state.auth.isLoggedIn)
    const loggedUser = useAppSelector(state => state.auth.token)
    const dispatch = useAppDispatch();
    // dispatch(authActions.login())
    console.log(teste)

    const { error, isLoading, sendRequest } = useHttp();

    useEffect(() => {
        const newObjeto = (test: any) => {
            console.log(test)
        }

        sendRequest({
            url: "https://dummyjson.com/products/1",
        },
            newObjeto
        )

    }, [])

    return (
        <Container>
            <h1>Home</h1>
            <h3>{loggedUser}</h3>
        </Container>
    )
}

export default Home;