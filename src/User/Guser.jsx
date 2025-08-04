import React from "react";
import Usidebar from "./Usidebar";
import {Routes,Route,useLocation } from "react-router-dom";
import Userdashboard from "./Userdashboard";
import Userrating from "./Userrating";
const Guser=()=>{
const location = useLocation();
  const user = location.state?.user;

    return<>
        <div className="row p-0">
            <div className="col-12 p-0 d-flex">
                <div className="col-2">
                     <Usidebar user={user}  />
                </div>
                <div className="col-10"style={{backgroundColor:"#f1faee",height:'98vh',borderRadius:"20px"}}>       
                    <Routes>
                        <Route path="/" element={<Userdashboard user={user} />}/>
                        <Route path="userrating" element={<Userrating user={user} />}/>
            </Routes>
                </div>
            </div>
        </div>

        

         
    </>
}

export default Guser;
