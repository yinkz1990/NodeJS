import React from "react";
import Navbar  from "../utils/navbar";


function Header () {
    return (
        <div style={{position: "sticky", top:"0px", zIndex: "1"}}>
            <Navbar/>   
        </div>
    )
}



export default Header