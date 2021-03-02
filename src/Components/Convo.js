import { Avatar } from '@material-ui/core'
import React from 'react'
import './Convo.css'

function Convo() {
    return (
        <div className="convo">
           <div className="convo__left">
                <Avatar/>
           </div>
           <div className="convo__right">
                <strong>Perrin Joseph</strong>
                <p>are you free...?</p>
           </div>
        </div>
    )
}

export default Convo
