import React from "react";
import OwnerSide from "./OwnerSide";
import AvgRating from "./AvgRating";
import AllRatingUser from "./AllUserRating";
import OwnerDash from "./OwnerDash.jsx";
import { Routes, Route } from "react-router-dom";

let Owner = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="col-2">
            <OwnerSide />
          </div>
          <div className="col-10">
            <Routes>
              <Route index element={<OwnerDash />} />
              <Route path="avg" element={<AvgRating />} />
              <Route path="allUser" element={<AllRatingUser />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
