import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';


const Error = () => {
    const error = useRouteError();
    console.error(error);
    
    if (isRouteErrorResponse(error)) {
        return (
          <Box>
            <Stack
              mt={4}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h1>Oops!</h1>
              <h2>{error.status}</h2>
              <p>{error.statusText}</p>
              {error.data?.message && <p>{error.data.message}</p>}
            </Stack>
          </Box>
        );
      } else {
        return <div>Oops</div>;
      }
}

export default Error