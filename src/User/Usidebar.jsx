import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Usidebar.css";
import Userdashboard from "./Userdashboard";
const Usidebar = ({user}) => {

  return <>
     <aside className="admin-sidebar p-3">
      <div className="accordion" id="adminAccordion">
        <div className="text-center mb-4">
          <h2><Link to="/guser" state={{ user }}  className="admin-logo"> 👤User Dashboard</Link></h2>
        </div>

       <div className="accordion-item">
          <h2 className="accordion-header" id="studentHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#studentCollapse" aria-expanded="false" aria-controls="studentCollapse">
              Dashboard 👈
            </button>
          </h2>
          <div id="studentCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
            <div className="accordion-body">
  
              <Link to="/guser/userrating" state={{ user }}  className="btn btn-outline-danger w-100">🌟User Rating Form🌟</Link>
              {/* <Link to="/guser" className="btn btn-outline-danger w-100  mt-3" >LOGOUT</Link> */}
            </div>
          </div>
        </div>

       
       <div className="" style={{marginTop:"400px"}}>
              <center><Link to="/login" className="btn w-50 bg-primary fw-bold text-light">Logout</Link></center>
            </div>
      </div>
    </aside>


  </>
};

export default Usidebar;
