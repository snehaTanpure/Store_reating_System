import React from "react";
import { Link } from "react-router-dom";

let Login = () => {

/*
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


  <div style={bgStyle}>
      <div style={overlayStyle}>

       </div>
   </div>
  */
  

  return (
    <>
      

        <div className="container bg-light mt-5 w-25 p-3 shadow-lg" >
           <center>
            <h1>Login</h1>
          </center>

          <div className="form">
            <div className="form-group mb-3">
              <label className="form-label">Enter the Username</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Enter the Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <input type="button" value="Login" className="form-control btn btn-dark" />
            </div>
          </div>

          <center>
            <span>
              Don't have an account ? <Link to="/abc">Register</Link>
            </span>
          </center>
        </div>
      
    </>
  );
};

export default Login;
