import React from "react";


const Userrating = () => {
  return <>
    <div className="container-fluid w-50 border shadow" style={{marginTop:"130px",marginLeft:"200px"}}>
      <h1>User Rating</h1>
      <p className="form-subtitle">We Value Your Feedback</p>
      
         <div className="form">
          <div className="form-group mb-3">
            <label htmlFor="" className="form-label">select Store name</label>
            <select name="" id="" className="form-control">
              <option value="">select option</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="" className="form-label">Rating</label>
            <select name="" id="" className="form-control">
              <option value="">select Option</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <input type="button" className="form-control btn btn-primary" value="Submit"/>
          </div>
         </div>

        
    </div>
  

</>
}
export default Userrating;
