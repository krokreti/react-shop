import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import CustomButton from "../../components/shared/CustomButton";
import Input from "../../components/shared/Input";


const Login = () => {

    const loginHandler = () => {
        console.log("login")
    }

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
                p={4}
                mt={6}
                bgcolor={'#cfe8fc'}
                width={'20em'}
                height={'fit-content'}
                borderRadius={'30px'}
            >
                <Stack
                    direction={"column"}
                    gap={3}
                >
                    <span>Welcome to React Shop!</span>
                    <Input id="email" label="Email" type="email" onChange={loginHandler} />
                    <Input id="password" label="Password" type="password" onChange={loginHandler} />
                    <CustomButton text="Login" onClick={loginHandler} />
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