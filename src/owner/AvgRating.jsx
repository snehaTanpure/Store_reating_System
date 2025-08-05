import React,{useState,useEffect} from "react";

import {avgRatingData} from '../service/service.js'
let AvgRating=({user})=>{
    let [avg,setAvg]=useState([]);

    let AvgDetail=async()=>{
      console.log();
        let data=await avgRatingData(user.id);
        setAvg(data);
    }
    useEffect(()=>{
      AvgDetail()
    },[])
    return<>
        
        <div className="container w-75 mt-5 p-3 shadow">
          <h1 className="text-center text-danger m-3">Average Rating of Stores</h1>
        <table className="table table-striped bg-light border w-100" >
     
         <thead>
           <tr>
            <th>Stores</th>
            <th>Address</th>
            <th>Average Rating</th>
             <th>Total Rating</th>
           </tr>
         </thead>
         <tbody>
        {
          avg.map((data)=>(
            <tr>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td>{data.avg}</td>
              <td>{data.sum}</td>
            </tr>
          ))
        }
            
          
         </tbody>
  

        </table>
        </div>
    </>
}

export default AvgRating;