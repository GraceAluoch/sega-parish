import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
        <nav className="nav-bar">
            
            <div className="nav-links">
                <ul>
                    <li>
                      <h1>Sega Parish</h1>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/programs">Programs</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact us</Link>
                    </li>
                </ul> 
            </div>
        </nav>  
    )
}
   
    
