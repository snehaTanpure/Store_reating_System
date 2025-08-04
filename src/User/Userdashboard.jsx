import React from "react";


const Userdashboard = ({user}) => {
  console.log(user);
  return (
    <div className="container-fluid  w-100 m-0 p-5 " >
      <div className="container w-50 border bg-light text-center p-5  mt-5 shadow">
        <h1>Welcome To Our Store </h1>
        <h1></h1>
        
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};

export default Userdashboard;
