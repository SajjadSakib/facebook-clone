import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShareIcon from '@material-ui/icons/Share';

function Post({proPic,name,timeStamp,post,image}) {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={proPic}/>
                <div className="avatar_group">
                    <h4>{name}</h4>
                    <h5>{new Date(timeStamp?.toDate()).toUTCString()}</h5>
                </div>

            </div>
            <div className="post_middle">
                <p>{post}</p>
                <img src={image} alt="" width='100%'/>
            </div>
            <div className="post_bottom">
                <ThumbUpAltOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon/>
                <ShareIcon/>
                <AccountCircleOutlinedIcon/>
            </div>
        </div>
    )
}

export default Post
