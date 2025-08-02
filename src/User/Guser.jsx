import React from "react";
import Usidebar from "./Usidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Userdashboard from "./Userdashboard";
import Userrating from "./Userrating";
const Guser=()=>{
    return<>
       <BrowserRouter>
        <div className="row p-0">
            <div className="col-12 d-flex">
                <div className="col-3">
                     <Usidebar/>
                </div>
                <div className="col-9">
                    
            <Routes>
                <Route path="/" element={<Userdashboard/>}/>
                <Route path="/userrating" element={<Userrating/>}/>
            </Routes>
                </div>
            </div>
        </div>
       </BrowserRouter>
        

         
    </>
}

export default Guser;
