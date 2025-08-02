import React from "react";
import "./Userrating.css";

const Userrating = () => {
  return <>
    <div className="container">
      <h1>User Rating</h1>
      <p className="form-subtitle">We Value Your Feedback</p>
      
      <form>
        <label>
          <span>Store Name:</span>
          <select required>
            <option value="">--Select Store--</option>
            <option value="store1">Store 1</option>
            <option value="store2">Store 2</option>
            <option value="store3">Store 3</option>
          </select>
        </label>

        <label>
          <span>Rating:</span>
          <select required>
            <option value="">--Select Rating--</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  

</>
}
export default Userrating;
