import React from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { blueGrey } from '@mui/material/colors';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a company dedicated to creating amazing products and
            providing excellent service.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email:info@technogiqitsolutions@gmail.com</p>
          <p>Phone: (+91) 9752342992</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <EmailIcon sx={{ mt: 1 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/mansichourasiya4041/"
              className="social-icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/mansichourasiya"
              className="social-icon"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Technogiq ITsolutions Pvt.Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
