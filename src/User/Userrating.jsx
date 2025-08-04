import React,{useEffect,useState} from "react";
import {viewstore,addRating} from '../service/service.js'

const Userrating = ({user}) => {
 

  let [store,setStore]=useState([]);

  let storeDetail=async()=>{
      let data=await viewstore();
      setStore(data);
  }
  useEffect(()=>{
    storeDetail();
  },[]);


  let [rate,setRate]=useState({
    store_id:'',
    rating:'',
    user_id:''
  });

  let addReating=(e)=>{
      setRate({
        ...rate,
        [e.target.name]:e.target.value
      });
     
  }
  useEffect(() => {
  if (user) {
    setRate((prev) => ({
      ...prev,
      user_id: user.id,
    }));
  }
}, [user]);




  let saveRating=async()=>{
    let result=await addRating(rate.store_id,rate.user_id,rate.rating);
    alert(result);
  }
  return <>
    <div className="container-fluid w-50 border bg-light rounded shadow" style={{marginTop:"130px",marginLeft:"340px"}}>
      <h1>User Rating</h1>
      <p className="form-subtitle">We Value Your Feedback</p>
      
         <div className="form">
          <div className="form-group mb-3">
            <label htmlFor="store_id" className="form-label">select Store name</label>
            <select name="store_id" id="store_id" className="form-control" value={rate.store_id} onChange={(e)=>{addReating(e)}}>
              <option value="">select option</option>
             {
              store.map((data)=>(
                <option value={data.id}>{data.name}</option>
              ))
             }
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <select name="rating" id="rating" className="form-control" value={rate.rating}  onChange={(e)=>{addReating(e)}}>
              <option value="">select Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <input type="button" className="form-control btn btn-primary" value="Submit" onClick={saveRating}/>
          </div>
         </div>

        
    </div>
  

</>
}
export default Userrating;
