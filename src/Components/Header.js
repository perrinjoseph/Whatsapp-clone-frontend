import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar' 
import './Header.css'
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__leftside">
                <Avatar className="header__left__Avatar" src = "https://i.ytimg.com/vi/u9l-iD11u28/maxresdefault.jpg" />
            </div>

            <div className="header__rightside">
                <IconButton>
                    <DataUsageIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />    
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
                
            </div>
        </div>
    )
}

export default Header
