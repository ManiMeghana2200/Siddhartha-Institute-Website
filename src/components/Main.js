import React from "react";
import "./Main.css";
import rdImage from "../assets/research_dev.jpg"; // keep your image path same

function Main() {
  return (
    <section className="main">
      {/* Main Hero Banner */}
      <div className="main-content">
        <h1>Welcome to Siddhartha Institute of Technology & Sciences</h1>
        <p>Empowering Students with Knowledge, Innovation, and Integrity.</p>
        
      </div>

      {/* Innovation + Research Section */}
      <div className="innovation-section">
        <div className="innovation-left">
          <h2>
            Shaping Bright Minds for a <br />
            Technologically Advanced and <br />
            Sustainable Future
          </h2>
        </div>

        <div className="innovation-right">
          <img src={rdImage} alt="Campus Innovation and Research" />
          <div className="innovation-text">
            Excellence in Education, Research & Development
          </div>
        </div>
      </div>
      <div className="explore-section">
        <h2>Begin Your Journey with Us</h2>
        <p>
          Discover our diverse academic programs designed to build innovation,
          leadership, and excellence in every student.
        </p>
        <a href="#academics">
          <button className="btn-primary">Explore Programs</button>
        </a>
      </div>
    </section>
  );
}

export default Main;
