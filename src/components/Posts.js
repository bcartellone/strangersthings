import React, { useState, useEffect } from 'react';

import './Posts.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
   
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts');
                const data = await response.json();
                console.log(data);
                console.log(data.data);
                    setPosts(data.data.posts);
                } catch (error) {
                    console.error(error);
            }
        
    };

    fetchPosts();
        
    }, []);

    return (
        <div className="user-posts">
            {
                <h2> {
                posts.length ? posts.map((currentPost, idx) => {
                    console.log(currentPost);
                    return <div key={idx}>
                    <div className ="indivPost">   
                        <p>{currentPost.title}</p>
                        <p>{currentPost.description}</p>
                        <p>{currentPost.author.username}</p>
                    </div> 
                        
                    </div>
                    }) : <div>No posts to display!</div>
                    }
                </h2>    
                
            }

        </div>
            )
}
    export default Posts;