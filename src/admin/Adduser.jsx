import React,{useState} from 'react';
import {register} from '../service/service.js'
let AddUser=({user})=>{

    let [users,setUser]=useState({

        name:'',
        email:'',
        password:'',
        address:'',
        role:''
    })

    let registerUser=(e)=>{

        setUser({
            ...users,
            [e.target.name]: e.target.value

        });

    }

    let registerCall=async()=>{

            let result= await register(users.name,users.email,users.password,users.address,users.role);
            alert(result);
    }
    return<>
          <div className="container p-3 mt-5 border shadow-lg bg-light" style={{ maxWidth: "600px" }}>

                <h1>Add User</h1>
                <div className="form">
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="name" id="name" value={users.name} className="form-control"  placeholder='Enter the Name' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="email" value={users.email} className="form-control" placeholder='Enter the Email' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text"  name="address" value={users.address} className="form-control" placeholder='Enter the Address'onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="password" value={users.password} className="form-control" placeholder='Enter the Password' onChange={(e)=>{registerUser(e)}}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                          <select className="form-control" name="role" value={users.role} onChange={(e)=>{registerUser(e)}}>
                            <option value="">Select Option</option>
                            <option value="owner">Owner</option>
                            <option value="user">User</option>
                          </select>
                    </div>
                   <div className="form-group mb-3">
                        <input type="button" className="form-control btn btn-dark" value="Register" onClick={registerCall}/>
                    </div>
                </div>
            </div>
    </>

}
export default AddUser;