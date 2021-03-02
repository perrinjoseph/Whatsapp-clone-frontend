import React, { useState } from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Input.css'
import axios from '../axios';
function Input() {

    const [input,setInput] = useState('')
    const sendMessage= (e)=>
    {
        e.preventDefault();
        axios.post("/messages/new",{
            message: input,
            name:"Perrin",
            timestamp:"Done",
            received: true
        })

        setInput("");
    }
    
    return (
        <div className="input">
            <div className="input__left">
                <InsertEmoticonIcon/>
            </div>
            <div className="input__right">
                <form  type ="submit" onSubmit={sendMessage}>
                    <input value ={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message"></input>
                    
                </form>
            </div>
        </div>
    )
}

export default Input
