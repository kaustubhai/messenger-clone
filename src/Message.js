import React, { forwardRef } from 'react';
import { Card } from '@material-ui/core';
import useStyle from "./styles/Message";


const Message = forwardRef(({ msg, un, key }, ref) => {
    
    let checkUser = false;
    let usernameIfMe = ''

    if (un === msg.username){
        checkUser = true;
    }
    else {
        usernameIfMe = msg.username + ': '
    }
    
    const classes = useStyle();

    return (
        <Card ref = {ref} id="textMsg" className={(checkUser ? classes.user_m : classes.message)}>
            <p>{usernameIfMe}{msg.message}</p>
        </Card>
    )
})

export default Message
