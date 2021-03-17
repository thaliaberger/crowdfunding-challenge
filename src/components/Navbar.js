import React, { Component } from 'react';
import logo from "../images/logo.svg"

function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo}/>
            <div>
                <a href="">About</a>
                <a href="">Discover</a>
                <a href="">Get Started</a>
            </div>
        </nav>
    )
}

export default Navbar;