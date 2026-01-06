import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social + Contact */}
        <div className="footer-column">
          <h3>Social Links</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          <h3>Reach Us</h3>
          <p>
            Siddhartha Institute of Technology & Sciences, <br />
            Korrremula X Road, Narapally, <br />
            Hyderabad, Telangana – 501301
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@siddharthait.ac.in">info@siddharthait.ac.in</a>
          </p>
        </div>

        {/* Bachelors Programs */}
        <div className="footer-column">
          <h3>Bachelors Programs</h3>
          <ul>
            <li>Computer Science Engineering</li>
            <li>Computer Science & Engineering (AI & ML)</li>
            <li>Computer Science & Engineering (Data Science)</li>
            <li>Information Technology</li>
            <li>Electronics and Communication Engineering</li>
            <li>Electrical and Electronics Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Civil Engineering</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#staff">Staff Directory</a></li>
            <li><a href="#campus">Campus Life</a></li>
            <li><a href="#placements">Placements</a></li>
            <li><a href="#alumni">Alumni</a></li>
          </ul>
        </div>

        {/* Students Corner */}
        <div className="footer-column">
          <h3>Students Corner</h3>
          <ul>
            <li><a href="#">Exam Cell</a></li>
            <li><a href="#">ERP Login</a></li>
            <li><a href="#">ECAP Login</a></li>
            <li><a href="#">Exam Timetable</a></li>
            <li><a href="#">Latest News</a></li>
            <li><a href="#">WES – Online Verification</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Siddhartha Institute of Technology &
          Sciences. All rights reserved.
        </p>
        <p>
          Designed & Developed by <span> Web Team</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
