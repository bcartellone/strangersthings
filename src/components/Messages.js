import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import './Messages.css';

const Messages = ( { isLoggedIn, token } ) => {
    const navigate = useNavigate()
    const { _id } = useParams();
    const [messageType, setMessageType] = useState('');

const sendMessage = (event) => {   
    event.preventDefault()

    fetch(`https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts/${_id}/messages`, {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
     body: JSON.stringify({
        message: {
        content: messageType
    }
     })
    }).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}
    return (
        <form onSubmit= {sendMessage}>
            <textarea value={messageType} onChange={(event) => setMessageType(event.target.value) } placeholder="Type Message Here:"/>
            <button type='submit'>Submit</button>
        </form>
        )

} 

export default Messages;















