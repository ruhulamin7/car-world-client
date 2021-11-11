import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../images/logo.png";
import postImage1 from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="row footer-container">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="mb-4">
              <img src={logo} alt="" className="footer-logo" />
            </div>
            <div className="footer-address">
              <address>
                <p>Address: 3/D, Asad Avenew, Mohammadpur, Dhaka.</p>
                <p>Email: enquery@domain.com</p>
                <p>Phone: 011-345-7676</p>
              </address>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h3 className="mb-4 text-white">USEFUL LINKS</h3>
            <div className="usefull-links">
              <ul className="ul-left">
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> General info
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Our Cervies
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Online Support
                  </Link>
                </li>
              </ul>
              <ul className="ul-right">
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Become a Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Language Packs
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> LearnPress
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Release Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            <h3 className="mb-4 text-white">RECENT POST</h3>
            <div className="recent-post">
              <NavLink to="/home">
                <div className=" postImage1">
                  <img src={postImage1} alt="" />
                  <p>
                    Doing blogger outreach or influencer marketing and want to
                    connect with new
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
