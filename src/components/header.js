import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/branded-logo.png";
import NavItem from "./nav-item";

import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
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
