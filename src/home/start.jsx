import React from 'react'
import Nav from './nav.jsx';

import Home from './home';
import Login from './LoginPage';
import { Routes,Route } from 'react-router-dom';
let Start=()=>{
    return<>
            <Nav/>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/login" element={<Login />} />
                <Route  path="/abc" element={<Login/> }/>

            </Routes>
    </>


}
export default Start;