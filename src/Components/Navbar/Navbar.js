import React from 'react';
import './Navbar.css';
import * as ReactBootStrap from "react-bootstrap";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/" className="navbar-brand navbar-logo">Brows Jungle</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/">
    <ReactBootStrap.Nav.Link href="/"> <i className="fas fa-home"></i>Home</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/about">
    <ReactBootStrap.Nav.Link href="/about">  <i className="far fa-address-book"></i>About</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/service">
    <ReactBootStrap.Nav.Link href="/service"> <i className="far fa-clone"></i>Services</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Training">
    <ReactBootStrap.Nav.Link href="/Training"> <i className="fas fa-graduation-cap"></i>Training</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/before-booking">
    <ReactBootStrap.Nav.Link href="/before-booking"><i className="far fa-clock"></i>Before-Booking</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/contact">
    <ReactBootStrap.Nav.Link href="/contact"> <i className="far fa-paper-plane"></i>Contact Us</ReactBootStrap.Nav.Link>
    </Link>
     
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
