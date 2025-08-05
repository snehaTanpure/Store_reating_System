import React,{useState,useEffect} from "react";
import {allRatingData} from '../service/service.js'

let AllRatingUser=({user})=>{

  let [all,setAll]=useState([]);

    let AllUserInfo=async()=>{
        let data=await allRatingData(user.id);
        setAll(data);
    }
    useEffect(()=>{
      AllUserInfo()
    },[])

    return<>
            
        <div className="container w-75 mt-5 p-3 border rounded shadow">
          <h1 className="text-center text-danger m-3"> All User be Rating on Store</h1>
        <table className="table table-striped border bg-light rounded shadow-lg" >
     
         <thead>
           <tr>
            <th>Name</th>
            <th>Store name</th>
            <th>Rating</th>
            <th>Date</th>
           </tr>
         </thead>

         <tbody>
          {
              all.map((data)=>(
                <tr>
                  <td>{data.name}</td>
                  <td>{data.store}</td>
                  <td>{data.rating}</td>
                  <td>{new Date(data.created_at).toLocaleDateString('en-GB')}</td>
                </tr>
              ))
          }
 
         </tbody>
  

        </table>
        </div>
    </>
}

export default AllRatingUser;