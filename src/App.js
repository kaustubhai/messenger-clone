import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import useStyles from './styles/App';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import { Button, FormControl, Input, InputLabel, Typography } from '@material-ui/core';

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
  

  //getting data
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(message => {
        setMessages(message.docs.map(doc => ({ id: doc.id, data: doc.data(), })))
      })
  }, [])

    const inputValue = (event) => {
      event.preventDefault();
      setInput(event.target.value);
    }

    const amt = messages.length;

    
    //putting data
    const send = (event) => {
      event.preventDefault();
      db.collection('messages').add({
        username: userName,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput('');
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }

    return (
      <div className={className.container}>
        <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
        <Typography variant="body5" component="h2">Welcome {userName}</Typography>
        <form className={className.form__a}>
          <FormControl>
            <InputLabel htmlFor="my-input">Enter a text Message</InputLabel>
            <Input autoComplete="off" className={className.input} value={input} onChange={inputValue} type="text" id="my-input" />
            <Button className={className.button} disabled={!input} color="primary" variant="contained" type="submit" onClick={send}>Send</Button>
          </FormControl>
        </form>
        <FlipMove>
          {
            messages.map((message, id) => <Message key={message.id} un={userName} msg={message.data} />)
          }
        </FlipMove>
        <div className={className.height__a}></div>
      </div>
    );
}

export default App;
