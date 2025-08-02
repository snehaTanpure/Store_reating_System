import React from 'react';
import { Link } from 'react-router-dom';

import './adminSide.css'

let AdminSide=()=>{

    return<>
         <aside className="admin-sidebar p-3">
      <div className="accordion" id="adminAccordion">
        <div className="text-center mb-4">
          <h3><Link to="/admin" className="admin-logo">📊 Admin Panel</Link></h3>
        </div>

       {/* User Section */}
<div className="accordion-item">
  <h2 className="accordion-header" id="UserHeading">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#UserCollapse" aria-expanded="false" aria-controls="UserCollapse">
       User
    </button>
  </h2>
  <div id="UserCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
    <div className="accordion-body">
      <Link to="/admin/addUser" className="btn btn-outline-danger w-100 mb-2">Add User</Link>
      <Link to="/admin/viewUser" className="btn btn-outline-danger w-100">View User</Link>
    </div>
  </div>
</div>


        {/* Store */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="StoreHeading">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#StoreCollapse" aria-expanded="false" aria-controls="StoreCollapse">
              Store
            </button>
          </h2>
          <div id="StoreCollapse" className="accordion-collapse collapse" data-bs-parent="#adminAccordion">
            <div className="accordion-body">
              <Link to="/admin/addStore" className="btn btn-outline-success w-100 mb-2">Add Store</Link>
              <Link to="/admin/viewStore" className="btn btn-outline-success w-100">View View</Link>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>
    </aside>

    </>

}
export default AdminSide;