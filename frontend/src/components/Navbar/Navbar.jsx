import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

import './Navbar.scss';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" >
          <span>VIBELY</span>
        </Link>
        <HomeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search here' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar