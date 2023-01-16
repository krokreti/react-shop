import Box from "@mui/material/Box"
import Input from "../../components/shared/Input";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import useHttp from "../../hooks/use-http";
import User from "../../models/User";
import CustomLoadingButton from "../../components/shared/CustomLoadingButton";
import MiniCard from "../../components/shared/MiniCard";


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

    const submitHandler = async() => {

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
        <MiniCard>
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
            <CustomLoadingButton 
                text="Login"
                isLoading={isLoading}
                disabled={!formIsValid}
                onClick={submitHandler}
            />
            <Box rowGap={2} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {/* <Link to={'/signup'}>Forgot password?</Link>   */}
                <span>Don't have an account yet?</span>
                <Link to={'/signup'}>Sign up!</Link>
            </Box>
        </MiniCard>
    )
}

export default Login