import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" >
          <span>VIBELY</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder='Search here' />
        </div>
      </div>
      <div className="right">
    <PersonOutlinedIcon/>
    <EmailOutlinedIcon/>
    <NotificationsOutlinedIcon/>
    <div className="user">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" alt="" />
      <span>Mehak Fatima</span>
    </div>
      </div>
    </div>
  )
}

export default Navbar