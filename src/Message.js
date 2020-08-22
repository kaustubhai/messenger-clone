import React from 'react'
import { Card } from '@material-ui/core';
import useStyle from "./styles/Message";


const Message = ({ msg, un }) => {
    
    let checkUser = false;

    if (un === msg.username)
        checkUser = true;
    
    const classes = useStyle();

    return (
        <Card id="textMsg" className={(checkUser ? classes.user_m : classes.message)}>
            <p>{msg.username} : {msg.message}</p>
        </Card>
    )
}

export default Message
