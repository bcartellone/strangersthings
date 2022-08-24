import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = ( { isLoggedIn }) => {
    const navigate = useNavigate()

    function navigateProfile () {
        navigate(`/Profile`)
        // console.log(event.target.value)
        
    }

    if (isLoggedIn) {
    return (
        <div>
            <h1 className='splashTitle'>Welcome to Stranger's Things!</h1>
            <div className="buttonMain">
                <button className='profButton' onClick={navigateProfile}>My Profile</button>
            </div>

        </div>
        )
    } else {
        <div>
            <h1 className='splashTitle'>Welcome to Stranger's Things! Please Login or Register</h1>
        </div>
    }
};

export default Home;