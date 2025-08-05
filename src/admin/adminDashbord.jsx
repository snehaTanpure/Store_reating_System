import React,{useState,useEffect} from 'react';
import {countUser,countStore} from '../service/service.js'



let AdminDash=({user})=>{

    let [uCount,setUsercount]=useState(0);
    let [sCount,setStorecount]=useState(0);


   let totalUser=async()=>{
        let count=await countUser();
        setUsercount(Number(count));
    }


    let totalStores=async()=>{
        let count=await countStore();
        setStorecount(Number(count));
    }

        useEffect(()=>{
            totalUser();
            totalStores();
        },[])

    return<>
           
           <center  className='container-fluid mt-5 bg-secondary'style={{width:"95%"}}><h1>Wel-come Admin {user.name}</h1></center>

           <div className='w-50 m-auto mt-5 d-flex justify-content-between border p-3'  style={{minHeight:"200px"}}>
            <div className='container w-50 p-3 m-3 accordion-body bg-info text-center shadow-lg rounded'>
         
            <h3>Total Users</h3>
                <h3>{uCount}</h3>
           </div>


           <div className='container text-center w-50 p-3 m-3 bg-danger shadow-lg rounded'>

            <h3>Total Store</h3>
                <h3>{sCount}</h3>
           </div>
 
           </div>

    </>

}
export default AdminDash;