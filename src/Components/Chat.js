import React from 'react'
import './Chat.css'
import ChatBody from './ChatBody'
import ChatHeader from './ChatHeader'
import Input from './Input'
import Search from './Search'

function Chat({messages}) {
    return (
        <div className="chat">
            <ChatHeader/>
            <ChatBody messages={messages}/>
            <Input/>
        </div>
    )
}

export default Chat
