import React from "react";
import "./CampusLife.css";
import { FaBookReader, FaLaptopCode, FaFutbol, FaUsers, FaTheaterMasks, FaFlask } from "react-icons/fa";

function CampusLife() {
  return (
    <section className="campus-life" id="campuslife">
      <div className="campus-header">
        <h2>Campus Life at Siddhartha</h2>
        <p>
          Our campus is a vibrant community where learning goes beyond classrooms. 
          We believe in nurturing creativity, leadership, and collaboration 
          through academics, innovation, and extracurricular excellence.
        </p>
      </div>

      <div className="campus-grid">
        <div className="campus-card">
          <FaLaptopCode className="campus-icon" />
          <h3>Innovation & Research</h3>
          <p>
            Our innovation cell encourages students to build creative solutions 
            and take part in hackathons, R&D projects, and incubation programs.
          </p>
        </div>

        <div className="campus-card">
          <FaFutbol className="campus-icon" />
          <h3>Sports & Fitness</h3>
          <p>
            With vast grounds and top-notch facilities, students actively 
            participate in sports, athletics, and yoga for a healthy body and mind.
          </p>
        </div>

        <div className="campus-card">
          <FaTheaterMasks className="campus-icon" />
          <h3>Cultural Activities</h3>
          <p>
            Our cultural fests, clubs, and celebrations bring together creativity, 
            diversity, and enthusiasm across all departments.
          </p>
        </div>

        <div className="campus-card">
          <FaUsers className="campus-icon" />
          <h3>Student Clubs</h3>
          <p>
            Siddhartha boasts active student-led clubs in coding, music, dance, 
            literature, photography, and entrepreneurship.
          </p>
        </div>

        <div className="campus-card">
          <FaFlask className="campus-icon" />
          <h3>Modern Laboratories</h3>
          <p>
            Our advanced laboratories and maker spaces help students gain 
            hands-on experience with real-world applications.
          </p>
        </div>

        <div className="campus-card">
          <FaBookReader className="campus-icon" />
          <h3>Learning Spaces</h3>
          <p>
            Peaceful reading zones, a fully digitized library, and collaborative 
            study areas promote an engaging academic environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CampusLife;
