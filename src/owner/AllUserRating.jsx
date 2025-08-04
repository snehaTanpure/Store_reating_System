import React,{useState,useEffect} from "react";
import {allRatingData} from '../service/service.js'

let AllRatingUser=({user})=>{

  let [all,setAll]=useState([]);

    let AllUserInfo=async()=>{
        let data=await allRatingData();
        setAll(data);
    }
    useEffect(()=>{
      AllUserInfo()
    },[])

    return<>
            
        <div className="container w-50 mt-5 bg-white p-0  shadow">

        <table className="table table-striped border" >
     
         <thead>
           <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Date</th>
           </tr>
         </thead>

         <tbody>
          {
              all.map((data)=>(
                <tr>
                  <td>{data.name}</td>
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