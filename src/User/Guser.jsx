import React from "react";
import Usidebar from "./Usidebar";
import {Routes,Route } from "react-router-dom";
import Userdashboard from "./Userdashboard";
import Userrating from "./Userrating";
const Guser=()=>{
    return<>
        <div className="row p-0">
            <div className="col-12 d-flex">
                <div className="col-2">
                     <Usidebar/>
                </div>
                <div className="col-10">
                    
            <Routes>
                <Route path="/" element={<Userdashboard/>}/>
                <Route path="userrating" element={<Userrating/>}/>
            </Routes>
                </div>
            </div>
        </div>

        

         
    </>
}

export default Guser;
