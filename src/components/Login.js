import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = ( { isLoggedIn, setIsLoggedIn, setToken } ) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
  
      event.preventDefault();
  
try {
  const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/users/login', {
      method: "POST",
      headers: {
                  "Content-Type": "application/json"
                },
      body: JSON.stringify({
        user: {
                username: username,
                password: password
  
                }
        })
                
  }).then(response => response.json()).then(data => {
    console.log(data.data.token)
    if (data.data.token) {
    setIsLoggedIn(true)
    setToken(data.data.token)
    navigate('/');
  }  
  })
     
  } catch (error) {
      console.error(error);
  }
  
};
  
  return (
  <div>
  <div class="loginBox">
  
      <form onSubmit={handleSubmit}>
          <label for="uname"><b>Username</b></label>
          <input value={username} onChange={(event) => {
            console.log(event.target.value);
            setUsername(event.target.value)}}  type="text" placeholder="Enter Username" name="uname" required/>
          
      <label for="pass"><b>Password</b></label>
      <input value={password} onChange={(event) => {
        console.log(event.target.value);
        setPassword(event.target.value)}}  type="password" placeholder="Enter Password" name="pass" required/>
  
      <button type="submit">Login</button>
      
      </form>
  
    </div>
              
  </div>
  
    ) 
  
  };

export default Login;