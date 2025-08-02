import React from 'react';

let AddStore=()=>{

    return<>
           <div className="container w-50 p-3 mt-5 border shadow-lg bg-light">
              <h1>Add Store</h1>
            <div className="form">
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Store name</label>
                    <input type="text" className="form-control" name="sname" placeholder='Enter the Stroe name' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Stroe Address</label>
                    <input type="text" className="form-control" placeholder='Enter the Stroe Address' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="form-label">Select Store Owner</label>
                    <select name="owner" id="owner" className='form-control'>
                        <option value="">select Owner</option>
                    </select>
                </div>
                <div className="form-group mb-3 mt-5">
                    <input type="button" className="form-control btn btn-dark" value="Add Store" />
                </div>
                </div>
           </div> 
    </>

}
export default AddStore;


{/* */}