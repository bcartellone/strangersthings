import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Posts.css';

const Posts = ( { token }) => {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("");
    const [allPosts, setAllPosts] = useState([]);


    useEffect(() => {
   
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts');
                const data = await response.json();
                console.log(data);
                console.log(data.data);
                    setPosts(data.data.posts);
                    setAllPosts(data.data.posts);
                } catch (error) {
                    console.error(error);
            }
        
    };

    fetchPosts();
        
    }, []);

    function view (event) { 
      navigate(`/Messages/${event.target.value}`)
      // console.log(event.target.value)
      
  }

  function edit (event) { 
    navigate(`/Posts/${event.target.value}`)
    // console.log(event.target.value)
    
}

function deletePost (event) {
    fetch(`https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts/${event.target.value}`, {
    method: "DELETE",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

}
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchValue) { 
        
        setPosts(() => {
        return allPosts.filter((item) => { 
            if (item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()) || item.author.username.toLowerCase().includes(searchValue.toLowerCase())) {
                return item 
            } 
        })
    })
} else {
    setPosts(allPosts)
}
}
    return (
        <div>
            <input type="text" placeholder="Search"
            defaultValue=""
            onChange={(event) => searchItems(event.target.value)}/>
        
        <div className="user-posts">
            {
                <h2> {
                posts.length ? posts.map((currentPost, idx) => {
                    
                    return <div key={idx}>
                    <div className ="indivPost">   
                        <p>{currentPost.title}</p>
                        <p>{currentPost.description}</p>
                        <p>{currentPost.author.username}</p>
                        <button value={currentPost._id} onClick={edit}>Edit</button>
                        <button value={currentPost._id} onClick={view}>Message User</button>
                        <button value={currentPost._id} onClick={deletePost}>Delete Post</button>
                        
                    </div> 
                    
                    </div>
                    }) : <div>No posts to display!</div>
                    }
                    
                </h2>    

                
                
            }
        </div>      
        </div>
        
       
            )

}


    
export default Posts;



  
  
  
    