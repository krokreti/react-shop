import React from "react";
import Snackbar from '@mui/material/Snackbar';

const Message: React.FC<{ text: string, show: boolean }> = (props) => {

    return (
        <Snackbar open={props.show} autoHideDuration={4000} message={props.text} />
    )
}

export default Message;