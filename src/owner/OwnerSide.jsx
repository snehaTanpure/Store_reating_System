import React from "react";
import './ownerside.css'
import { Link } from "react-router-dom";

let OwnerSide=()=>{

    return<>

    <aside className="admin-sidebar p-3">
      <div className="accordion" id="adminAccordion">

        <div className="mb-5">
              <Link to="/owner" className="btn btn-outline-danger w-100"> 👲Owner Dashborad </Link>
        </div>

      
        <div className="accordion-item">
          <h2 className="accordion-header" id="studentHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#studentCollapse" aria-expanded="false" aria-controls="studentCollapse">
               👨‍💻 User
            </button>
          </h2>
          <div id="studentCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
            <div className="accordion-body">
              <Link to="/owner/allUser" className="btn btn-outline-danger w-100">View User</Link>
            </div>
          </div>
        </div>


         <div className="accordion-item">
          <h2 className="accordion-header" id="studentHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#usercollape" aria-expanded="false" aria-controls="usercollape">
               🏪 Store
            </button>
          </h2>
          <div id="usercollape" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
            <div className="accordion-body">
              <Link to="/owner/avg" className="btn btn-outline-danger w-100 mb-2">View Store</Link>
            </div>
          </div>
        </div>

      
      </div>
    </aside>

    </>
}

export default OwnerSide;