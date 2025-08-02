import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Usidebar.css"; // Make sure to create and import this CSS
import Userdashboard from "./Userdashboard";
const Usidebar = () => {

  return <>
     <aside className="admin-sidebar p-3">
      <div className="accordion" id="adminAccordion">
        <div className="text-center mb-4">
          <h3><Link to="/" className="admin-logo"> 👤User Dashboard</Link></h3>
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
  
              <Link to="/userrating" className="btn btn-outline-danger w-100">🌟User Rating Form🌟</Link>
              <Link to="/" className="btn btn-outline-danger w-50 mx-5 mt-3" >LOGOUT</Link>
            </div>
          </div>
        </div>

       

      </div>
    </aside>


  </>
};

export default Usidebar;
