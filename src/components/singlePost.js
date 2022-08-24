import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = ({token}) => {
    const { _id } = useParams();

    const [singlePost, setSinglePost] = useState()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        console.log(token)
    const fetchSinglePost = async () => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                  },
            })
            const data = await response.json();
            console.log("this is the response:", data)
            setSinglePost(data)
           
        } catch (error) {
            console.log(error)
        }
    };
    fetchSinglePost();
 
}, []);


return (
    <>
    { singlePost?.data?.post && 
                 <form>
                 <label for="title"><b>Title</b></label>
                 <input value={title ?? singlePost.data.post.title} onChange={(event) => {
                   console.log(event.target.value);
                   setTitle(event.target.value)}}  type="text" placeholder="Enter Your New Title" name="title" required/>
                 
             <label for="description"><b>Description</b></label>
             <input value={description ?? singlePost.data.post.description} onChange={(event) => {
               console.log(event.target.value);
               setDescription(event.target.value)}}  type="description" placeholder="Enter Your New Description" name="description" required/>
           
             <label for="price"><b>Price</b></label>
             <input value={price ?? singlePost.data.post.price} onChange={(event) => {
               console.log(event.target.value);
               setPrice(event.target.value)}}  type="price" placeholder="Enter Your New Price" name="price" required/>
           
             <button type="submit">Edit Post</button>
             
             </form>
    }
    </>

)
        

};

export default SinglePost; 