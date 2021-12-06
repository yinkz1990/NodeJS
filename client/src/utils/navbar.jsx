import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import {Routes, Link} from "react-router-dom"
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link className ="text-link" to=""> 
            <Logo className="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link  className ="text-link" to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link  className ="text-link" to="/product">Menu</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link className ="text-link" to="/reservation">Reservation</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link className ="text-link" to="/about">About</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link  className ="text-link" to="/addproduct">Add Menu</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link  className ="text-link" to="/reservation-list">Reservation List</Link>
          </li>
      </ul>
      </div>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
  </div>
  );
};

export default Navbar;
