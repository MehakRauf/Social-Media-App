import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from '../../components/Posts/Post'
import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="user-Info">
          <div className="left">
            <a href="http://facebook.com"></a>
            <FacebookTwoToneIcon fontSize="large" />
            <a href="http://instagram.com"></a>
            <InstagramIcon fontSize="large" />
            <a href="http://linkedin.com"></a>
            <LinkedInIcon fontSize="large" />
            <a href="http://facebook.com"></a>
            <PinterestIcon fontSize="large" />
          </div>
          <div className="center">
            <span>Mehak Fatima</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>PK</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Post />
      </div>
    </div>
  )
}

export default Profile