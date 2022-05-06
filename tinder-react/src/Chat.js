import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import './Chat.css'
function Chat({name,message,profilePic,timestamp}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="image" src={profilePic}></Avatar>
                <div className="desc">
                    <h2>{name}</h2>
                    <p>{message}</p>

                </div>
                <p className="time">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
