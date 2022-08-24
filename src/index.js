import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header, Posts, Login, Home, Register, CreatePost, SinglePost, Profile, Messages } from './components';




const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [token, setToken] = useState('')
    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token}/>}/>
                    <Route path={'Posts'} element={<Posts isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token}/>}/>
                    <Route path={'create'} element={<CreatePost isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token}/>}/>
                    <Route path={'Login'} element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token} setToken={setToken}/>}/>
                    <Route path={'Register'} element={<Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path={'Profile'} element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token}/>}/>
                    <Route path={'Messages/:_id'} element={<Messages isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} token={token}/>}/>
                    <Route path={'Posts/:_id'} element={<SinglePost token={token}/>}/>
                </Route>
            </Routes>   
        </>

    

    ) 
    };



let appElement = document.getElementById('app');
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, appElement);