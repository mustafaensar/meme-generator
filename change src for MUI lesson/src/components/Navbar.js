import React from "react";
import logo from "../images/logo.svg"

function Navbar(){
  return(
    <nav className="nav">
      <img src={logo} alt="logo" className=""/>
      <h1 className="logo-name">Meme Generator</h1>
      <p className="nav-title">React Course - Project5</p>
    </nav>
  )
}

export default Navbar;