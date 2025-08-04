import React from 'react';

let AdminDash=({user})=>{

    return<>
           
           <center  className='container-fluid mt-5  bg-secondary'style={{width:"95%"}}><h1>Welcome to {user.name}</h1></center>

           <div className='w-75 mt-5 d-flex m-auto p-3'>
            <div className='container w-25 p-5 m-3 bg-info shadow-lg rounded'>
         
            <h3>Total Users</h3>
   
           </div>


           <div className='container w-25 p-5 m-3 bg-danger shadow-lg rounded'>

            <h3>Total Store</h3>

           </div>


           <div className='container w-25 p-5 m-3 bg-warning shadow-lg rounded'>

           <h3>Total Rating </h3>

           </div> 
           </div>

    </>

}
export default AdminDash;