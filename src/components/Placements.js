import React from "react";
import "./Placements.css";
import {
  FaRupeeSign,
  FaUserGraduate,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

import microsoftLogo from "../assets/microsoft.png";
import tcsLogo from "../assets/tcs.png";
import adobeLogo from "../assets/adobe.png";
import accentureLogo from "../assets/accenture.png";
import paypalLogo from "../assets/paypal.png";
import nttdataLogo from "../assets/nttdata.png";
import micronLogo from "../assets/micron.png";

function Placements() {
  return (
    <section className="placements-section" id="placements">
      <div className="placements-container">
        {/* Left Info */}
        <div className="placements-left">
          <h2>Placements</h2>
          <p>
            At Siddhartha Institute of Technology & Sciences, our commitment to
            nurturing career-ready professionals is evident through our
            outstanding placement record. Our dedicated Training & Placement
            Cell connects students with leading companies and ensures they
            develop the technical and interpersonal skills needed to excel in
            the industry.
          </p>
          <button className="placement-btn">
            Explore Placements <FaArrowRight />
          </button>
        </div>

        {/* Right Stats */}
        <div className="placements-right">
          <div className="placement-stat">
            <FaRupeeSign className="stat-icon" />
            <div>
              <h3>₹ 45 LPA</h3>
              <p>Highest Package</p>
            </div>
          </div>

          <div className="placement-stat">
            <FaBuilding className="stat-icon" />
            <div>
              <h3>120+</h3>
              <p>Recruiting Companies</p>
            </div>
          </div>

          <div className="placement-stat">
            <FaUserGraduate className="stat-icon" />
            <div>
              <h3>85%</h3>
              <p>Placement Percentage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiters */}
      <div className="recruiters">
        <h4>Our Top Recruiters</h4>
        <div className="recruiter-logos">
          <img src={tcsLogo} alt="TCS" />
          <img src={microsoftLogo} alt="Microsoft" />
          <img src={adobeLogo} alt="Adobe" />
          <img src={accentureLogo} alt="Accenture" />
          <img src={paypalLogo} alt="PayPal" />
          <img src={nttdataLogo} alt="NTT Data" />
          <img src={micronLogo} alt="Micron" />
        </div>
      </div>
    </section>
  );
}

export default Placements;
