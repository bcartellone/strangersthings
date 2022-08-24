import React, { useState, useEffect } from 'react';

import './Profile.css';

const Profile = ( { token } ) => {

    const [profile, setProfile] = useState('');

    useEffect(() => {
   
        const fetchUser = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/users/me', {
                    
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }, 
                
                });

                const data = await response.json();
                console.log(data);
                console.log("this is the username:", data.data.username);
                    setProfile(data.data);
                } catch (error) {
                    console.error(error);
            }
        
    };

    fetchUser();
        
    }, []);

return (
    <div className="user-profile">
            {
            <h2> {
                profile ? 

             <div>
                    <div className ="userProfileInfo">   
                        <p>My Username: {profile.username}</p>
                        {profile.messages.map(message => (
                        <>   
                            <p>Message From: {message.fromUser.username}</p>
                            <p>{message.content}</p>
                        </>     
                        ))}
                        {profile.posts.map(post => (
                        <> <p>Post Name: {post.title}</p>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                        </>
                        ))}
                    </div> 
                    
                    </div>
                    : <div>You aren't logged in!</div>
                    }
                    
                </h2>      
                }
        </div>      
      
)
};

export default Profile;