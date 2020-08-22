import React from 'react'
import { Card } from '@material-ui/core';
import { useStyle } from "./styles/Message";

const Message = ({ msg, un}) => {
    
    return (
        <Card className="Message">
            <p>{un} : {msg}</p>
        </Card>
    )
}

export default Message
