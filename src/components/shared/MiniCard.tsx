import { Box, Container, Stack } from "@mui/material";
import React from "react"

type Props = {
    children?: React.ReactNode
};

const MiniCard: React.FC<Props> = (props) => {
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
                    {props.children}
                </Stack>
            </Box>
        </Container>
    )
}

export default MiniCard