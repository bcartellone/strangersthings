import React, { useState, useEffect } from 'react';

import './Login.css';

const Login = () => {
    return (
        <div>
<div class="loginBox">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="pass" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>
            
        </div>
    )
};

export default Login;