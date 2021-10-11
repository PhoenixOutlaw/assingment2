import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import './css/header.css';
import { useHistory } from 'react-router';

export const Header = () => {
    const history = useHistory()
    return (
        <div>
            <div className="header">
                <MenuIcon/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsYTWo0Bx2b6mUc-qO0JKNMAwOAX9Y3fRvw&usqp=CAU" onClick={()=>history.push("/")} alt="" />
                <Avatar />
            </div>
            
        </div>
    )
}
