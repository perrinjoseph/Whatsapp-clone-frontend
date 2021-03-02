import React from 'react'
import './Conversations.css'
import Convo from './Convo'
function Conversations() {
    return (
        <div className="conversations">
            <h1>Add New Chat</h1>
            <Convo/>
            <Convo/>
            <Convo/>

        </div>
    )
}

export default Conversations
