import Box from "@mui/material/Box"
import Stack from '@mui/material/Stack';
import CustomButton from "../../components/shared/CustomButton";
import Input from "../../components/shared/Input";

const Login = () => {

    const loginHandler = () => {
        console.log("login")
    }

    return (
        <Stack
        direction={"column"}
        >
            <Input id="login" label="Login" type="text" onChange={loginHandler}/>
            <Input id="password" label="Password" type="password" onChange={loginHandler}/>
            <CustomButton text="Login" onClick={loginHandler}/>
        </Stack>
    )
}

export default Login