import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';

const Navbar = () => {
  console.log("NavBAR rendering");
    return(
<div className="sidebar-nav-wrapper">
<div className="navbar-logo">
<ul id="ddmenu_1" className="collapse show dropdown-nav">
      <li>
          <Link to="/" className="active"> Dashboard </Link>
        </li>
        <li>
          <Link to="/signin" className="active"> Signin </Link>
        </li>
        <li>
          <Link to="/signup" className="active"> Signup </Link>
        </li>
      </ul>  
</div>
</div>
 )

}
export default Navbar
