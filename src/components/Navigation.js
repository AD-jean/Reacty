import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
    return (    
        
        <div className="navigation">
            <ul>                
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>About</NavLink></li>
            </ul>
        </div>
    );    
};

export default Navigation;