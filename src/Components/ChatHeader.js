import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './ChatHeader.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <Avatar src=""/>
                <div className="chatHeader__info">
                    <strong>Perrin Joseph</strong>
                    <p>Last seen...</p>
                </div>
            </div>

            <div className="chatHeader__right">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
