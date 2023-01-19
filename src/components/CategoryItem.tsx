import React, { ReactNode } from "react";
import { Box } from '@mui/material'
import CapitalizeFirstLetter from "./helpers/CapitalizeFirstLetter";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CategoryItem:React.FC<{category:string, categoryClickHandler: (item: string) => void }> = (props) => {
    return (
        <Box
            p={2}
            bgcolor={'#fff'}
            width={'100%'}
            height={'fit-content'}
            borderRadius={'10px'}
            boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}
            sx={{ cursor:'pointer', transition:'.5s', ":hover": {bgcolor:'#8f8f8f', color:'white'} }}
            onClick={props.categoryClickHandler.bind(null, props.category)}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            {CapitalizeFirstLetter(props.category).replace("-", " ")}
        <ArrowForwardIosIcon/>
        </Box>
    )
}

export default CategoryItem;