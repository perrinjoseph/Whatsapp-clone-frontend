import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  //responsible for getting all the data uppon reload
  useEffect (()=>{
    axios.get("/messages/sync").then(res=>{
      setMessages(res.data)
    })
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('1c250ec44e4381894730', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      
      setMessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);
  console.log(messages);


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages ={messages}/>
      </div>
    </div>
  );
}

export default App;
