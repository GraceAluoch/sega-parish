import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
        <nav className="navbar"> 
         <h1>LOGO</h1>
            <div className="links"> 
                     <Link to="/">Home</Link>
                     <Link to="/about">About</Link>
                     <Link to="/programs">Programs</Link>
                     <Link to="/contacts">Contact us</Link>
            </div>
        </nav>  
    )
}
   
    
