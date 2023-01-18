import React from "react"
import Children from "../../models/Children";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

const Card: React.FC<Children> = (props) => {
    return (
        <Container sx={{ display:'flex', justifyContent:"center", marginY:'2em' }}>
            <Box
                p={4}
                bgcolor={'#fff'}
                width={'100%'}
                maxWidth={'60em'}
                height={'fit-content'}
                borderRadius={'30px'}
                boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            >
                {props.children}
            </Box>   
        </Container>
    )
}

export default Card;