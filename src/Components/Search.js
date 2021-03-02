import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';

function Search() {
    return (
        <div className="search">
            <SearchIcon/>
            <input placeholder="Search"></input>
        </div>
    )
}

export default Search
