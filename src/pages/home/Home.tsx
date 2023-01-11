import { Box, Container } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { authActions, authStatus } from "../../store/auth-slice";

const Home = () => {
    const auth = useAppSelector(authStatus);
    const teste = useAppSelector(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch();
    // dispatch(authActions.login())

    return (
        <Container>
            <h1>Home</h1>

        </Container>
    )
}

export default Home;