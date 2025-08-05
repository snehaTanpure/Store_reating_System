import React, { useEffect, useState } from "react";
import { viewstore, addRating } from '../service/service.js';

const Userrating = ({ user }) => {

  const [store, setStore] = useState([]);

  useEffect(() => {
    const storeDetail = async () => {
      const data = await viewstore();
      setStore(data);
    };
    storeDetail();
  }, []);

  const [rate, setRate] = useState({
    store_id: '',
    rating: '',
    user_id: ''
  });

  // set user_id when component receives user
  useEffect(() => {
    if (user) {
      setRate((prev) => ({
        ...prev,
        user_id: user.id
      }));
    }
  }, [user]);

  const addReating = (e) => {
    setRate({
      ...rate,
      [e.target.name]: e.target.value
    });
  };

  const handleStarClick = (starValue) => {
    setRate((prev) => ({
      ...prev,
      rating: starValue
    }));
  };

  const saveRating = async () => {
    let result = await addRating(rate.store_id, rate.user_id, rate.rating);
    alert(result);
  };

  return (
    <div className="container-fluid w-50 border bg-light rounded shadow" style={{ marginTop: "130px", marginLeft: "340px" }}>
      <h1>User Rating</h1>
      <p className="form-subtitle">We Value Your Feedback</p>

      <div className="form">
        {/* Store selection */}
        <div className="form-group mb-3">
          <label htmlFor="store_id" className="form-label">Select Store Name</label>
          <select name="store_id" id="store_id" className="form-control" value={rate.store_id} onChange={addReating}>
            <option value="">Select option</option>
            {store.map((data) => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>
        </div>

        {/* Star rating */}
        <div className="form-group mb-3">
          <label className="form-label">Select Rating</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                // key={star}
                onClick={() => handleStarClick(star)}
                style={{
                  fontSize: "2.8rem",
                  color: star <= rate.rating ? "gold" : "gray",
                  cursor: "pointer"
                }}
              >
                ★
              </span>
            ))}
            <span className="ms-2">({rate.rating || "No Rating"})</span>
          </div>
        </div>

        {/* Submit */}
        <div className="form-group mb-3">
          <input type="button" className="form-control btn btn-primary" value="Submit" onClick={saveRating} />
        </div>
      </div>
    </div>
  );
};

export default Userrating;
