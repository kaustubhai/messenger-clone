import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

function App() {



  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(prompt('Enter your Username'))
  },[]);

  const inputValue = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  const send = (event) => {
    event.preventDefault();
    let arr = messages;
    let toPush = {username: userName, text: input}
    arr.push(toPush);
    setMessages(arr);
    setInput('');
  }

  return (
    <div className="container">
      <FormControl>
      <InputLabel for="msg">Enter a Message</InputLabel>
      <Input id="msg" value={input} onChange={inputValue}></Input>
      <Button type="submit"  disabled={!input} color="primary" variant="contained" onClick={send}>SEND</Button>
      {
          messages.map(message => <Message un={message.username} msg={message.text}/>)
      }
        </FormControl>
    </div>
  );
}

export default App;
