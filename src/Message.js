import React from 'react'
import { Card } from '@material-ui/core';
import useStyle from "./styles/Message";

const Message = ({ msg, un }) => {
    
    const classes = useStyle();

    return (
        <Card className={classes.message}>
            <p>{un} : {msg}</p>
        </Card>
    )
}

export default Message
