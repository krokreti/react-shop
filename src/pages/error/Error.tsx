import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Card from '../../components/shared/Card';

const Error = () => {
    const error = useRouteError();
    console.error(error);
    
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
          </Stack>
          </Card>);
      }
}

export default Error