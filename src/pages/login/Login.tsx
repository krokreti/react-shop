import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import Input from "../../components/shared/Input";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import useHttp from "../../hooks/use-http";
import CustomButton from "../../components/shared/CustomButton";
import CircularProgress from '@mui/material/CircularProgress';
import User from "../../models/User";
import CustomLoadingButton from "../../components/shared/CustomLoadingButton";

const Login = () => {
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { error: connectionError, isLoading, sendRequest: sendLoginRequest } = useHttp();

    const {
        value: enteredLogin,
        hasError: enteredLoginHasError,
        isValid: enteredLoginIsValid,
        valueChangeHandler: inputLoginChangeHandler,
        valueBlurHandler: inputLoginBlurHandler,
    } = useInput(value => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));

    const {
        value: enteredPassword,
        hasError: enteredPasswordHasError,
        isValid: enteredPasswordIsValid,
        valueChangeHandler: inputPasswordChangeHandler,
        valueBlurHandler: inputPassordBlurHandler
    } = useInput(value => value.trim() !== '');

    useEffect(() => {
        if(enteredLoginIsValid && enteredPasswordIsValid) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }, [enteredLoginIsValid, enteredPasswordIsValid])

    const submitHandler = () => {

        sendLoginRequest({
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: {
                email: enteredLogin,
                password: enteredPassword,
                returnSecureToken: true
            }
            
        }, (data: User) => {
            console.log(data);
            dispatch(authActions.login(data.idToken));
            navigate("/home")
        })
    }

    const loginErrorMessage = enteredLoginHasError ? "Please, enter a valid email!" : "" ;
    const passwordErrorMessage = enteredPasswordHasError ? "Please, enter a valid password!" : "" ;

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                p={4}
                bgcolor={'#cfe8fc'}
                width={'20em'}
                height={'fit-content'}
                borderRadius={'30px'}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            >
                <Stack
                    direction={"column"}
                    gap={3}
                >
                    <span>Welcome to React Shop!</span>
                    <Input
                        id="email" 
                        label="Email" 
                        type="email" 
                        onChange={inputLoginChangeHandler} 
                        onBlur={inputLoginBlurHandler} 
                        value={enteredLogin} 
                        error={enteredLoginHasError} 
                        helperText={loginErrorMessage}
                    />
                    <Input 
                        id="password" 
                        label="Password" 
                        type="password" 
                        onChange={inputPasswordChangeHandler} 
                        onBlur={inputPassordBlurHandler} 
                        value={enteredPassword} 
                        error={enteredPasswordHasError} 
                        helperText={passwordErrorMessage}
                    />
                    {/* {!isLoading && (
                    <CustomButton 
                        text="Login" 
                        disabled={!formIsValid}
                        onClick={submitHandler} 
                    />)}
                    {isLoading && (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    )} */}
                    <CustomLoadingButton 
                        text="Login"
                        isLoading={isLoading}
                        disabled={!formIsValid}
                        onClick={submitHandler}
                    />
                    <Box rowGap={2} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <span>Don't have an account yet?</span>
                        <Link to={'/signup'}>Sign up!</Link>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}

export default Login