// import React , {useEffect} from 'react'
// import './Navbar.css';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
// import Logo from '../../Assets/Logo/Two_Eyebrows.png'

// const Navbar = () => {

//   function animation(){
//     let tabsNewAnim = $('#navbarSupportedContent');
//     let activeItemNewAnim = tabsNewAnim.find('.active');
//     let activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//     let activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//     let itemPosNewAnimTop = activeItemNewAnim.position();
//     let itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-selector").css({
//       "top":itemPosNewAnimTop.top + "px", 
//       "left":itemPosNewAnimLeft.left + "px",
//       "height": activeWidthNewAnimHeight + "px",
//       "width": activeWidthNewAnimWidth + "px"
//     });
//     $("#navbarSupportedContent").on("click","li",function(e){
//       $('#navbarSupportedContent ul li').removeClass("active");
//       $(this).addClass('active');
//       let activeWidthNewAnimHeight = $(this).innerHeight();
//       let activeWidthNewAnimWidth = $(this).innerWidth();
//       let itemPosNewAnimTop = $(this).position();
//       let itemPosNewAnimLeft = $(this).position();
//       $(".hori-selector").css({
//         "top":itemPosNewAnimTop.top + "px", 
//         "left":itemPosNewAnimLeft.left + "px",
//         "height": activeWidthNewAnimHeight + "px",
//         "width": activeWidthNewAnimWidth + "px"
//       });
//     });
//   }

//   useEffect(() => {
//     animation();
//     $(window).on('resize', function(){
//       setTimeout(function(){ animation(); }, 500);
//     });
//   }, []);


//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

//   return (
//   <nav className="navbar navbar-expand-lg navbar-mainbg">
    
//       <NavLink className="navbar-brand navbar-logo" to="/" exact>
//       <img src={Logo} alt='Home'  />
//       </NavLink>
   
//       <button 
//         className="navbar-toggler"
//         onClick={ function(){
//           setTimeout(function(){ animation(); });
//         }}
//         type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <i className="fas fa-bars text-white"></i>
//       </button>
 
//       <div 
//         className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
            
//             <div className="hori-selector">
//               <div className="left"></div>
//               <div className="right"></div>
//             </div>
            
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/" exact>
//                 <i 
//                 className="fas fa-home">
//                 </i>Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about" exact>
//                 <i 
//                 className="far fa-address-book">
//                 </i>About
//               </NavLink> 
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/service" exact>
//                 <i 
//                 className="far fa-clone">
//                 </i>Services
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/before-booking" exact>
//                 <i 
//                 className="far fa-clock">
//                 </i>Before-Booking
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact" exact>
//                 <i 
//                 className="far fa-paper-plane">
//                 </i>Contact Us
//               </NavLink>
//             </li>
//         </ul>
//       </div>
//   </nav>
//   )
// }
// export default Navbar;


import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">THICC BOIS HOURS</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/features">
    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/pricing">
    <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/deets">
    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;