import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header, Posts, Login, Home, Register } from './components';




const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home/>}/>
                    <Route path={'Posts'} element={<Posts/>}/>
                    <Route path={'Login'} element={<Login/>}/>
                    <Route path={'Register'} element={<Register/>}/>
                </Route>
            </Routes>   
        </>
       
    

    ) 
    };



let appElement = document.getElementById('app');
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, appElement);