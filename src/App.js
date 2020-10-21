import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import useStyles from './styles/App';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';

function App() {

  const className = useStyles();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    let name = prompt('Enter your Username');
    if (!name)
      return
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
        <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.png" alt="Main_logo"/>
        <Typography variant="body5" component="h2">Welcome {userName}</Typography>
        <form className={className.form__a}>
          <FormControl>
            <TextField label="Enter a text Message" autoComplete="off" className={className.input2} value={input} onChange={inputValue} variant="outlined" type="text" id="outlined-basic" />
            <Button className={className.button} disabled={!input || !userName} color="primary" variant="contained" type="submit" onClick={send}>Send</Button>
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
