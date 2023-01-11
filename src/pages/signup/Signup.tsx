import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import Input from "../../components/shared/Input";
import React from "react";
import CustomButton from "../../components/shared/CustomButton";

const Signup = () => {
    const onSubmit = () => {
        console.log("data sent!")
    }

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
                    <span>New to React Shop? Please, sign up and be part of us!</span>
                    <Input id="email" type="email" label="E-mail" onChange={onSubmit}/>
                    <Input id="password" type="password" label="Password" onChange={onSubmit}/>
                    <Input id="password2" type="password" label="Re-type password" onChange={onSubmit}/>
                    <CustomButton onClick={onSubmit} text={"Register now!"} />
                </Stack>
            </Box>
        </Container>
    )
}

export default Signup