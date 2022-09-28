import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='Header'>
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <img className="header__logo" alt="" src={process.env.PUBLIC_URL+"logo_req.png"}>
        </img>
        <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
        </IconButton>
    </div>
  )
}

export default Header 