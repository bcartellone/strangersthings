import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <body>
        <div className='navToolsMain'>
            <h1>Stranger's Things</h1>
        <div className='navToolsSub'>
            <h2 onClick={()=> navigate('/')} >Home</h2>

            <h2 onClick={()=> navigate('/Posts')} >Posts</h2>

            <h2 onClick={()=> navigate('/Login')} >Login</h2>
        </div>    
        </div>
        </body>
    )
};

export default Header; 