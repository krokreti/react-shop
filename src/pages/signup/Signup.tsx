import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import Input from "../../components/shared/Input";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import CustomLoadingButton from "../../components/shared/CustomLoadingButton";
import User from "../../models/User";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { authActions } from "../../store/auth-slice";

const Signup = () => {
    const navigate = useNavigate();
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const { sendRequest, isLoading, error } = useHttp();
    const dispatch = useAppDispatch();

    const {
        value: enteredEmail,
        hasError: emailHasError,
        isValid: emailIsValid,
        reset: emailReset,
        valueBlurHandler: inputEmailBlurHandler,
        valueChangeHandler: inputEmailChangeHandler,
    } = useInput(value => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) !== null);

    const {
        value: enteredPassword,
        hasError: passwordHasError,
        isValid: passwordIsValid,
        reset: passwordReset,
        valueBlurHandler: inputPasswordBlurHandler,
        valueChangeHandler: inputPasswordChangeHandler,
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredPassword2,
        hasError: password2HasError,
        isValid: password2IsValid,
        reset: password2Reset,
        valueBlurHandler: inputPassword2BlurHandler,
        valueChangeHandler: inputPassword2ChangeHandler,
    } = useInput(value => value.toString() === enteredPassword.toString());

    useEffect(() => {
        if (emailIsValid && password2IsValid && passwordIsValid) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false);
        }
    }, [emailIsValid, password2IsValid, passwordIsValid])

    const onSubmit = async () => {
        console.log("data sent!")
        sendRequest(
            {
                url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }
            },
            (data: User) => {
                console.log(data)
                emailReset()
                password2Reset();
                passwordReset();
                dispatch(authActions.login(data.idToken));
                navigate("/");
            })
    }

    const emailErrorMessage = emailHasError ? 'Please, enter a valid email!' : '';
    const passwordErrorMessage = passwordHasError ? 'This filed is obrigatory!' : '';
    const password2ErrorMessage = password2HasError ? 'The passwords do not match!' : '';

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                p={4}
                bgcolor={'#fff'}
                width={'20em'}
                height={'fit-content'}
                borderRadius={'30px'}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            >
                <Stack
                    direction={"column"}
                    gap={3}
                >
                    <span>New to <strong>React Shop</strong>? <br /> Please, sign up and be part of us!</span>
                    <Input
                        id="email"
                        type="email"
                        label="E-mail"
                        value={enteredEmail}
                        onChange={inputEmailChangeHandler}
                        onBlur={inputEmailBlurHandler}
                        error={emailHasError}
                        helperText={emailErrorMessage}
                    />

                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        value={enteredPassword}
                        onChange={inputPasswordChangeHandler}
                        onBlur={inputPasswordBlurHandler}
                        error={passwordHasError}
                        helperText={passwordErrorMessage}
                    />

                    <Input
                        id="password2"
                        type="password"
                        label="Password"
                        value={enteredPassword2}
                        onChange={inputPassword2ChangeHandler}
                        onBlur={inputPassword2BlurHandler}
                        error={password2HasError}
                        helperText={password2ErrorMessage}
                    />

                    <CustomLoadingButton
                        onClick={onSubmit}
                        text={"Register now!"}
                        isLoading={isLoading}
                        disabled={!formIsValid}
                    />
                </Stack>
                <Box rowGap={2} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1em' }}>
                    <span>Already have an account yet?</span>
                    <Link to={'/login'}>Sign in!</Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Signup