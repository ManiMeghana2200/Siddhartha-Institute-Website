import React from "react";
import "./BeyondOrdinary.css";
import {
  FaLaptopCode,
  FaBookOpen,
  FaUsers,
  FaRocket,
  FaGlobe,
  FaChalkboardTeacher,
  FaBuilding,
  FaMedal,
} from "react-icons/fa";

function BeyondOrdinary() {
  return (
    <section className="beyond-section">
      {/* Top Intro */}
      <div className="beyond-header">
        <h2>Siddhartha Leads with Innovation</h2>
        <p>
          At Siddhartha Institute of Technology & Sciences, we redefine
          education by combining innovation, research, and global collaboration
          to prepare students for the challenges of tomorrow’s world.
        </p>
        <a href="#about">
          <button className="learn-btn">Discover More About Siddhartha</button>
        </a>
      </div>

      {/* Cards */}
      <div className="beyond-cards">
        <div className="beyond-card dark">
          <FaLaptopCode className="beyond-icon" />
          <h3>Cutting-Edge Technology</h3>
          <p>
            We integrate modern technologies and practical learning
            environments, ensuring our students stay ahead in the digital age.
          </p>
          <a href="#academics" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card light">
          <FaBookOpen className="beyond-icon" />
          <h3>Transformative Learning</h3>
          <p>
            Our curriculum blends academic excellence with industry exposure,
            helping students grow into thinkers, creators, and leaders.
          </p>
          <a href="#programs" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card dark">
          <FaUsers className="beyond-icon" />
          <h3>Vibrant Campus Life</h3>
          <p>
            Beyond academics, we nurture leadership, teamwork, and creativity
            through cultural, technical, and sports events year-round.
          </p>
          <a href="#campuslife" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card light">
          <FaRocket className="beyond-icon" />
          <h3>Research & Startups</h3>
          <p>
            Our students and faculty collaborate to drive research,
            entrepreneurship, and innovation through real-world problem-solving.
          </p>
          <a href="#research" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card dark">
          <FaGlobe className="beyond-icon" />
          <h3>Global Perspective</h3>
          <p>
            With collaborations, internships, and expert lectures, we prepare
            Siddharthians to compete and succeed on a global platform.
          </p>
          <a href="#placements" className="explore-link">
            Explore →
          </a>
        </div>

        {/* NEW CARDS BELOW */}
        <div className="beyond-card light">
          <FaChalkboardTeacher className="beyond-icon" />
          <h3>Faculty Excellence</h3>
          <p>
            Our experienced faculty bring expertise and mentorship, guiding
            students to achieve both academic and professional excellence.
          </p>
          <a href="#faculty" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card dark">
          <FaBuilding className="beyond-icon" />
          <h3>Smart Infrastructure</h3>
          <p>
            A modern campus equipped with smart classrooms, digital labs, and
            advanced facilities to foster practical learning experiences.
          </p>
          <a href="#infrastructure" className="explore-link">
            Explore →
          </a>
        </div>

        <div className="beyond-card light">
          <FaMedal className="beyond-icon" />
          <h3>Student Achievements</h3>
          <p>
            Our students consistently excel in academics, placements, and
            competitions, reflecting the true spirit of Siddhartha.
          </p>
          <a href="#achievements" className="explore-link">
            Explore →
          </a>
        </div>
      </div>
    </section>
  );
}

export default BeyondOrdinary;
