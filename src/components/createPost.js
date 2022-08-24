import React, { useState, useEffect } from 'react';

import './createPost.css';

export const createPost = ({token}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    console.log("this is the token:", token)

      event.preventDefault();
  

  const response = await fetch('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts', {
      method: "POST",
      headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${token}`
                },
      body: JSON.stringify({
        post: {
              title: title,
              description: description,
              price: price
              }
        })
        
      })
      
  const data = await response.json();        

}
 

return (
      <div>
      <div class="createPostBox">

  <form onSubmit={handleSubmit}>
      <label for="title"><b>Title</b></label>
      <input value={title} onChange={(event) => {
        console.log(event.target.value);
        setTitle(event.target.value)}}  type="text" placeholder="Enter Title" name="title" required/>
      
  <label for="description"><b>Description</b></label>
  <input value={description} onChange={(event) => {
    console.log(event.target.value);
    setDescription(event.target.value)}}  type="description" placeholder="Enter Your Description" name="description" required/>

  <label for="price"><b>Price</b></label>
  <input value={price} onChange={(event) => {
    console.log(event.target.value);
    setPrice(event.target.value)}}  type="price" placeholder="Enter Your Price" name="price" required/>

  <button type="submit">Create Post</button>
  
  </form>

</div>
          
</div>

  )
  }

export default createPost;