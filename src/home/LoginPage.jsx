import React from "react";


let Login=()=>{

    return <>
    
    <div className="container bg-light mt-5 w-25 p-3">
            <h1>Login</h1>
       <div className="form">
        <div className="form-group mb-3">
            <label htmlFor="" className="form-label">Enter the Username</label>
            <input type="text" className="form-control" />
        </div>
        <div className="form-group mb-3">
            <label htmlFor="" className="form-label">Enter the Password</label>
            <input type="password" className="form-control" />
        </div>
        <div className="form-group mb-3">
            <input type="button" value="login" className="form-control btn btn-primary " /></div>
       </div>
           
    </div>
    
    </>
} 


export default Login ;