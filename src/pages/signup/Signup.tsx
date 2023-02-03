import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import Input from "../../components/shared/Input";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";
import { Link, useNavigate } from "react-router-dom";
import CustomLoadingButton from "../../components/shared/CustomLoadingButton";
import User from "../../models/User";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { authActions } from "../../store/auth-slice";
import UserResponseError from '../../models/UserResponseError';
import Message from "../../components/shared/Message";
import MessageType from "../../models/MessageType";

const Signup = () => {
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fetchMessage, setFetchMessage] = useState<MessageType>();
    const navigate = useNavigate();
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

    // useEffect para limpar o valor do fetch error, possibilitando várias mensagens de erro.
    useEffect(() => {
        if (fetchMessage) {
            const timeId = setTimeout(() => {
                setFetchMessage(undefined)
            }, 3000)
            return () => {
                clearTimeout(timeId)
            }
        }
    }, [fetchMessage])

    const onSubmit = async () => {
        setIsLoading(true)
        // fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: enteredEmail,
        //         password: enteredPassword,
        //         returnSecureToken: true,
        //     })
        // }).then((response) => {
        //     if (response.ok) {
        //         response.json()
        //             .then((data: User) => {
        //                 emailReset();
        //                 passwordReset();
        //                 password2Reset();
        //                 dispatch(authActions.login(data.idToken));
        //                 navigate('/');
        //             })
        //     } else {
        //         response.json()
        //             .then((data: UserResponseError) => {
        //                 setFecthError(data);
        //                 throw new Error(data.error.message);
        //             });
        //     }
        // }).catch((err) => {
        //     console.log("deu ruim")
        //     console.log(err)
        // })
        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                })
            })

            if (response.ok) {
                const data: User = await response.json();
                setFetchMessage({
                    color: 'success',
                    show: true,
                    text: 'Signed up successfully!'
                });
                emailReset();
                passwordReset();
                password2Reset();
                dispatch(authActions.login(data.idToken));
                navigate('/');
            } else {
                const data: UserResponseError = await response.json();
                setFetchMessage({
                    color: "error",
                    show: true,
                    text: data.error.message
                });
                throw new Error(data.error.message);
            }
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false);
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
                    {fetchMessage && (
                        <Message text={fetchMessage.text} color={fetchMessage.color} show={fetchMessage.show} />
                    )}
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