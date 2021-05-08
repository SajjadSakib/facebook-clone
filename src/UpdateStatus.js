import React, {useState} from 'react';
import { Avatar } from '@material-ui/core';
import './UpdateStatus.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './Firebase';
import firebase from 'firebase';

function UpdateStatus({user}) {
    const handleClick = (e)=>{
        e.preventDefault();
         // db stuff
        db.collection('posts').add({
            name:user.displayName,
            post:input,
            postImage:image,
            profilePicture:user.photoURL,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
        setImage('');
       
    }
    const [input,setInput] = useState("");
    const [image,setImage] = useState("");
 
    return (
        <div className='update_status'>
           <div className="status_header">
              <Avatar src={user.photoURL} />
              <form>
                  <div className="status_option">
                    <input value={input} onChange={(e)=>setInput(e.target.value)}
                    type="text" placeholder="What's on your mind?" style={{flex: 2}}/>
                    <input value={image} onChange={(e)=>setImage(e.target.value)}
                    type="text" placeholder='Image Url'/>
                    <button className="hidden_button" onClick={handleClick}>Hidden Button</button>
                </div>
              </form> 
            </div>
            <div className="status_bottom">
                <div className="status_option">
                    <VideocamIcon style={{color:'red'}}/>
                    <p>Live</p>
                </div>
                <div className="status_option">
                    <PermMediaIcon style={{color:'green'}}/>
                    <p>Photo</p>
                </div>
                <div className="status_option">
                    <InsertEmoticonIcon style={{color:'#f53dca'}}/>
                    <p>Feeling/Activity</p>
                </div>
            </div> 
        </div>
    )
}

export default UpdateStatus
