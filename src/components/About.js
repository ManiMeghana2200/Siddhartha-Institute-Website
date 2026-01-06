import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Siddhartha Institute of Technology & Sciences</h2>
        <p>
          Established with a vision to create a center of excellence in
          engineering education, Siddhartha Institute of Technology & Sciences
          has emerged as one of the most dynamic and forward-thinking
          institutions in the region. We believe that quality education is the
          foundation for a strong and innovative nation.
        </p>

        <p>
          The institute is affiliated to <strong>JNTU Hyderabad</strong> and
          approved by <strong>AICTE, New Delhi</strong>. With a vibrant campus
          that fosters creativity, collaboration, and innovation, we empower
          students with both technical knowledge and real-world experience. Our
          goal is to produce globally competent engineers who contribute to
          society through innovation, leadership, and integrity.
        </p>

        <div className="about-mission">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality education through continuous innovation in
            teaching and learning, fostering research culture, and developing
            responsible professionals who make a positive impact in the
            technological world.
          </p>
        </div>

        <div className="about-vision">
          <h3>Our Vision</h3>
          <p>
            To be a premier institution known for academic excellence, research
            innovation, and societal contribution — inspiring students to become
            future-ready professionals and ethical leaders.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
