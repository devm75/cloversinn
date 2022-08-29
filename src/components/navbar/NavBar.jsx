import React, { useState,useEffect } from "react";
import { NavBarContainer, NavItem, NavLogo } from "./styles/navbar";
import { Link } from "react-router-dom";
import "./styles/navbarStyles.css";
import { FaBars } from "react-icons/fa";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
let bgcolor = "#8F7222";
export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
const [activebgcolor,setactivebgcolor] = useState(false)

useEffect(() => {
  
  document.addEventListener('scroll', (e) => {
    if(window.scrollY>100)
      setactivebgcolor(true)
    else {
      setactivebgcolor(false)
    }
  })

  return () => {
    // second
  }
}, [])

  return (
    <>
      <div className="pre-header">
        <div className="contact-display">
          <span className="hide-on-mobile">Have Any Questions?</span>
          <div className="contact-field-container">
            <a className="contact-anchor-link" href="tel:+911899242409">
              <span>
                <AiTwotonePhone></AiTwotonePhone>
              </span>
              <span>+91 1899242409</span>
            </a>
          </div>
          <div className="contact-field-container">
            <a className="contact-anchor-link" href="tel:+919805050105">
              <span>
                <AiTwotonePhone></AiTwotonePhone>
              </span>
              <span>+91 9805050105</span>
            </a>
          </div>
          <div className="contact-field-container">
            <a
              className="contact-anchor-link"
              href="mailto:cloversinn@gmail.com"
            >
              <span>
                <AiOutlineMail></AiOutlineMail>
              </span>
              <span>cloversinn@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="navbar-bar">
          <FaBars onClick={() => setShowNavbar(!showNavbar)}></FaBars>
        </div>
        {showNavbar && (
          <div className="navbar-mobile-content-container">
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/"
              className="link-NavBar"
            >
              <NavItem>
                <p className="NavBar-text">Home</p>
              </NavItem>
            </Link>
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/hotel"
              className="link-NavBar"
            >
              <NavItem>
                <p>The Hotel</p>
              </NavItem>
            </Link>
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/rooms"
              className="link-NavBar"
            >
              <NavItem>
                <p>Rooms</p>
              </NavItem>
            </Link>
            {/* <Link to="/" className="link-NavBar">
            <NavLogo>
              <h1>Clovers Inn</h1>
            </NavLogo>
          </Link> */}
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/sight-seeing"
              className="link-NavBar"
            >
              <NavItem>
                <p>Sight Seeing</p>
              </NavItem>
            </Link>
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/gallery"
              className="link-NavBar"
            >
              <NavItem>
                <p>Gallery</p>
              </NavItem>
            </Link>
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              to="/booking"
              className="link-NavBar"
            >
              <NavItem>
                <p>Booking</p>
              </NavItem>
            </Link>
          </div>
        )}
      </div>
      <NavBarContainer backgroundColor={activebgcolor && bgcolor}>
        <Link to="/" className="link-NavBar">
          <NavItem>
            <p className="NavBar-text">Home</p>
          </NavItem>
        </Link>
        <Link to="/hotel" className="link-NavBar">
          <NavItem>
            <p>The Hotel</p>
          </NavItem>
        </Link>
        <Link to="/rooms" className="link-NavBar">
          <NavItem>
            <p>Rooms</p>
          </NavItem>
        </Link>
        <NavLogo>
          <Link to="/" className="link-NavBar">
            <h1>Clovers Inn</h1>
          </Link>
        </NavLogo>

        <NavItem>
          <Link to="/sight-seeing" className="link-NavBar">
            <p>Sight Seeing</p>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery" className="link-NavBar">
            <p>Gallery</p>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/booking" className="link-NavBar">
            <p>Booking</p>
          </Link>
        </NavItem>
      </NavBarContainer>
    </>
  );
};
