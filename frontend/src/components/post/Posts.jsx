import React, { useState } from 'react';
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import './Posts.scss';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Posts = ({ post }) => {
    const [openComments, setOpenComments] = useState(false);
    const liked = true;
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className="date">{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/" + post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon style={{ color: "red" }} /> : <FavoriteBorderOutlinedIcon />}
                        Likes
                    </div>
                    <div className="item" onClick={() => setOpenComments(!openComments)}>
                        <TextsmsOutlinedIcon />
                        Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon />
                        Share
                    </div>
                </div>
                {openComments && <Comments postId={post.id} />}
            </div>
        </div>
    )
}

export default Posts