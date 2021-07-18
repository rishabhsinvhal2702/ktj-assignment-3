import { Link } from "react-router-dom";
import React from 'react';
const Navbar = () => {
    return ( 
        <div className="nav">
            <Link to="/dashboard" className="dash-element dashboard-nav">Dashboard</Link>
            <Link to="/signin" className="dash-element sign-in-nav">Sign-in</Link>
            <Link to="signup" className="dash-element sign-up-nav">Sign-up</Link>
        </div>
     );
}
 
export default Navbar;