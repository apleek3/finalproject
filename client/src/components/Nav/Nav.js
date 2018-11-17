import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>

  <nav className="navbar navbar-dark bg-dark">
    {/* <Link className="navbar-brand" to="/">User Search</Link> */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/"><button type="button" className="btn btn-primary">Add a Review</button></Link>
      </li>
      <li className="nav-item">
        <Link to="/savedPersons"><button type="button" className="btn btn-primary">See Previous Reviews</button></Link>
      </li>
    </ul>
</nav>;

export default Nav;
