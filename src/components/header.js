import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/branded-logo.png";
import NavItem from "./nav-item";

import "./header.css";

const Header = ({ siteTitle }) => (
  <header style={{ position: "relative" }}>
    <div
      style={{
        marginBottom: -40,
        marginLeft: 10,
        zIndex: 1090,
      }}
    >
      <Link to="/" style={{ border: "none" }}>
        <img src={logo} alt={siteTitle} />
      </Link>
    </div>
    <div style={{ position: "absolute", right: 50, top: 10 }}>
      <h2 style={{ color: "yellow", letterSpacing: 5 }}>505.362.8255</h2>
      <h2 style={{ color: "yellow", letterSpacing: 5 }}>505.991.6365</h2>
    </div>
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about-us">About Us</NavItem>
      <NavItem to="/our-sets">Our Sets</NavItem>
      <NavItem to="/our-history">Our History</NavItem>
      <NavItem to="/visit-us">Visit Us</NavItem>
      <NavItem to="/contact-us">Contact Us</NavItem>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
