import React,{useEffect,useState} from 'react';
import {viewUsers} from "../service/service.js"
let ViewUser=({user})=>{

let [view,setView]=useState([]);

let viewUser=async()=>{
    let users=await viewUsers();
    setView(users);
}

useEffect(()=>{
    viewUser();
},[]);
console.log(view);
    return<>
          <div className="container mt-5">
            <table className="table table-striped bg-light border shadow-lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {view.map((data, index) => (
                        <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.role}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
          </div>
    </>

}
export default ViewUser;