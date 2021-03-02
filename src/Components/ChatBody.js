import React from 'react'
import './ChatBody.css'

function ChatBody({messages}) {
    return (
        <div className="chatBody">

            {messages.map(message=>(
                <>
                <p className={`text__body ${message.received && "text__reciever"}`}>
                <span className="text__name">
                    {message.name}
                </span>
                {message.message}
                <span className="text__timestamp">
                    {new Date().toUTCString()}
                </span>
                 </p> 
                </>
            ))}

            
           
        </div>
        
    )
}

export default ChatBody
