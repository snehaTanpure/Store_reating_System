import React from 'react';
import { Link } from 'react-router-dom';

let Nav = () => {
  return (
    <div className="container d-flex">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" >Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" >Login </Link>
        </li>
        <li className="nav-item">
          <Link to="/owner">Owner Panel</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
