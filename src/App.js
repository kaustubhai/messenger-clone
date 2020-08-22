import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import useStyles from './styles/App';
import db from './firebase';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

function App() {

  const className = useStyles();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    let name = prompt('Enter your Username');
    name = name.toLowerCase();
    let lowerName = name.charAt(0).toUpperCase() + name.slice(1);
    setUserName(lowerName);
  }, []);
  
  useEffect(() => {
    db.collection('messages').onSnapshot(message => {
      setMessages(message.docs.map(doc => doc.data()))
    })
  },[])

  const inputValue = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

  const send = (event) => {
    event.preventDefault();
    let arr = messages;
    let toPush = {username: userName, message: input}
    arr.unshift(toPush);
    setMessages(arr);
    setInput('');
  }

  return (
    <div className={className.container}>
      <h1>Messenger - Clone</h1>
      <form class={className.form}>
      <FormControl class={className.formControl}>
        <InputLabel htmlFor="my-input">Enter a text Message</InputLabel>
        <Input className={className.input} value={input} onChange={inputValue} type="text" id="my-input" />
        <Button className={className.button} disabled={!input} color="primary" variant="contained" type="submit" onClick={send}>Send</Button>
        </FormControl>
        </form>
      {
          messages.slice(0).reverse().map(message => <Message un={userName} msg={message}/>)
      }
    </div>
  );
}

export default App;
