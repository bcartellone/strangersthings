import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate()

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');



  const handleSubmit = async (event) => {

    event.preventDefault();

    try {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/users/register', {
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
              
          });
          console.log(response);
          const data = await response.json();
          console.log(data);
          if (data.token) {
            navigate('/');
            setIsLoggedIn(true)
        }
        //  if (data.success = true) {
        //      return <h1>{data.message}</h1>
        //    }

          
    } catch (error) {
          console.error(error);
    }

};

return (
<div>
<div class="registerBox">

    <form onSubmit={handleSubmit}>
        <label for="uname"><b>Username</b></label>
        <input value={username} onChange={(event) => {
          console.log(event.target.value);
          setUsername(event.target.value)}}  type="text" placeholder="Enter Username" name="uname" required/>
        
    <label for="pass"><b>Password</b></label>
    <input value={password} onChange={(event) => {
      console.log(event.target.value);
      setPassword(event.target.value)}}  type="password" placeholder="Enter Password" name="pass" required/>

    <button type="submit">Register</button>
    
    </form>

  </div>
            
</div>

  ) 

};

export default Register;