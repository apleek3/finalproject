import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>


    <ul className="container-fluid">
      <li className="container-fluid">
        <Link to="/"><button type="button" className="btn btn-secondary">Add a Review</button></Link>
      </li>
      <li className="container-fluid">
        <Link to="/savedPersons"><button type="button" className="btn btn-light">See Previous Reviews</button></Link>
      </li>
    </ul>


export default Nav;
