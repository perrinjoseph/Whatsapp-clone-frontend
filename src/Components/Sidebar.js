import React from 'react'
import Conversations from './Conversations'
import Header from './Header'
import Search from './Search'
import './Sidebar.css'


function Sidebar() {
    return (
        <div className="sidebar">
            <Header />
            <Search />
            <Conversations />
        </div>
    )
}

export default Sidebar
