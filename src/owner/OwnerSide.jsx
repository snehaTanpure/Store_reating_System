import React from "react";
import './ownerside.css'
import { Link } from "react-router-dom";

let OwnerSide=({user})=>{

    return<>

    <aside className="admin-sidebar p-3">
      <div className="accordion" id="adminAccordion">

        <div className="mb-5 mt-5">
              <Link to="/owner" state={{user}} className="admin-logo fs-4 text-center"> 👲Owner Dashborad </Link>
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
              <Link to="/owner/allUser" state={{user}} className="btn btn-outline-danger w-100">View User</Link>
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
              <Link to="/owner/avg" state={{user}} className="btn btn-outline-danger w-100 mb-2">View Store</Link>
            </div>
          </div>
        </div>

      <div className="" style={{marginTop:"350px"}}>
        <center><Link to="/login" className="btn w-50 bg-primary fw-bold text-light">Logout</Link></center>
      </div>
      </div>
    </aside>

    </>
}

export default OwnerSide;