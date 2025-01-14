import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
    return (    
        
        <div className="navigation">
            <ul>                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    );    
};

export default Navigation;