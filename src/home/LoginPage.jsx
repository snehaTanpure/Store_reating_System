
import React,{useState} from "react";
import { Link } from "react-router-dom";
import {loginUser} from "../service/service.js"

let Login = () => {

  const bgStyle = {
    backgroundImage: "url('loginbackimg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // adjust opacity here
    zIndex: 1
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2
  };


  

    let [login,setLogin]=useState(
      {
        email:'',
        password:''
      }
    )

    let eventLogin=(e)=>{
      setLogin({
        ...login,
        [e.target.name]:e.target.value
      });
    }

    let verifyLogin=()=>{
        let result=loginUser(login.email,login.password);
         console.log(result);
    }

  return (
    <>
      
      <div style={bgStyle}>
      <div style={overlayStyle}>


        <div className="container bg-light mt-5 w-25 p-3 shadow-lg" >
           <center>
            <h1>Login</h1>
          </center>

          <div className="form">
            <div className="form-group mb-3">
              <label className="form-label">Enter the Username</label>
              <input type="text" className="form-control" id="email" name="email" value={login.email} onChange={(e)=>{eventLogin(e)}} />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Enter the Password</label>
              <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={(e)=>{eventLogin(e)}}/>
            </div>

            <div className="form-group mb-3">
              <input type="button" value="Login" className="form-control btn btn-dark"  onClick={verifyLogin}/>
              </div>
          </div>

          <center>
            <span>
              Don't have an account ? <Link to="/Register">Register</Link>
            </span>
          </center>
        </div>
      
       </div>
   </div>
    </>
  );
};

export default Login;
