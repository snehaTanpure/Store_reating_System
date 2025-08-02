import React from 'react';
import AdminDash from './adminDashbord';
import AddUser from './Adduser';    
import ViewUser from './viewUser';
import AddStore from './addStore';
import ViewStore from './viewStore';
import AdminSide from './adminSide';
import { Routes,Route } from 'react-router-dom';
let Admin=()=>{

    return<>

        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 d-flex">
                     <div className="col-2">
                        <AdminSide/>
                     </div>
                     <div className="col-10">
                      <Routes>
                         <Route path="/" element={<AdminDash/>}/>
                         <Route path="addUser" element={<AddUser/>}/>
                         <Route path="viewUser" element={<ViewUser/>}/>
                         <Route path="addStore" element={<AddStore/>}/>
                         <Route path="viewStore" element={<ViewStore/>}/>


                      </Routes>
                     </div>
                </div>
            </div>
        </div>

    </>

}
export default Admin;