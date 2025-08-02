import React from 'react';

let AddUser=()=>{

    return<>
            <div className="container w-50 border shadow mt-5 p-3 shadow-lg bg-light">
                <h1>Add User</h1>
                <div className="form">
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" name="name" className="form-control"  placeholder='Enter the Name'/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" className="form-control" placeholder='Enter the Email' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" className="form-control" placeholder='Enter the Address'/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                        <input type="text" className="form-control" placeholder='Enter the Password' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label"></label>
                          <select className="form-control">
                            <option value="">Select Option</option>
                            <option value="owner">Owner</option>
                            <option value="user">User</option>
                          </select>
                    </div>
                   <div className="form-group mb-3">
                        <input type="button" className="form-control btn btn-dark" value="Register" />
                    </div>
                </div>
            </div>
    </>

}
export default AddUser;