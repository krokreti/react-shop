import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import CustomButton from "../../components/shared/CustomButton";
import Input from "../../components/shared/Input";
import React, { useEffect, useState } from "react";
import useInput from "../../hooks/use-input";


const Login = () => {
    const [formIsValid, setFormIsValid] = useState(true);

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
        // if (!enteredLoginIsValid || !enteredPasswordIsValid) {
        //     return
        // }

        console.log("validated")
    }

    const loginErrorMessage = enteredLoginHasError ? "Please, enter a valid email!" : "" ;
    const passwordErrorMessage = enteredPasswordHasError ? "Please, enter a valid password!" : "" ;

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                p={4}
                mt={6}
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
                    <CustomButton 
                        text="Login" 
                        disabled={!formIsValid}
                        onClick={submitHandler} 
                    />
                    <Box rowGap={2} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <span>Don't have an account yet?</span>
                        <span>Sign up!</span>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}

export default Login