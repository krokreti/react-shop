import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Card from '../../components/shared/Card';
import React, { useState, useEffect } from 'react';

const Error = () => {
    const [counter, setCounter] = useState<number>(3);
    const navigate = useNavigate();
    const error = useRouteError();
    console.error(error);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCounter(counter - 1)
        if(counter===0) 
          navigate("/login");
      }, 1000);
      return () => clearInterval(timer);
    }, [counter, navigate])

    if (isRouteErrorResponse(error)) {
        return (
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
              <Card>
                <h1>Oops!</h1>
                <h2>An error ocurred!</h2>
                <h2>{error.status}</h2>
                <p>{error.statusText}</p>
                {error.data?.message && <p>{error.data.message}</p>}
              </Card>
            </Stack>
          </Box>
        );
      } else {
        return (
        <Card>
          <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
            >
          <h1>Oops</h1>
          <h3>An error ocurred!</h3>
          <h5>Redirecting in {counter}s</h5>
          </Stack>
          </Card>);
      }
}

export default Error