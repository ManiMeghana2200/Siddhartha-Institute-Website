import React, { useRef } from "react";
import "./Academics.css";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaLightbulb,
  FaHandsHelping,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

function Academics() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="academics-section" id="academics">
      {/* Header */}
      <div className="academics-header">
        <h2>Academic Excellence at Siddhartha</h2>
        <p>
          Siddhartha Institute of Technology & Sciences is committed to
          delivering high-quality education through innovative teaching,
          research excellence, and holistic student development. Our academic
          ecosystem fosters curiosity, creativity, and technical competence.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="academics-container">
        <button className="arrow-btn left" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>

        <div className="academics-scroll" ref={scrollRef}>
          <div className="academics-card">
            <FaChalkboardTeacher className="academics-icon" />
            <h3>Innovative Teaching</h3>
            <p>
              Faculty use modern teaching strategies like flipped classrooms,
              interactive sessions, and digital simulations to make learning
              practical and engaging.
            </p>
          </div>

          <div className="academics-card">
            <FaFlask className="academics-icon" />
            <h3>Research & Development</h3>
            <p>
              Our R&D cell drives innovation through student-faculty projects in
              AI, robotics, sustainable energy, and next-gen materials.
            </p>
          </div>

          <div className="academics-card">
            <FaLightbulb className="academics-icon" />
            <h3>Innovation & Entrepreneurship</h3>
            <p>
              Through incubation centers and startup cells, students turn ideas
              into impactful projects and real-world solutions.
            </p>
          </div>

          <div className="academics-card">
            <FaHandsHelping className="academics-icon" />
            <h3>Mentorship & Support</h3>
            <p>
              Our mentorship programs and personalized academic support ensure
              every student gets guided pathways to reach their goals.
            </p>
          </div>
        </div>

        <button className="arrow-btn right" onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>

      {/* Footer Note */}
      <div className="academics-footer">
        <p>
          With expert faculty, research-driven learning, and advanced labs,
          Siddhartha Institute of Technology & Sciences continues to set
          benchmarks in engineering education.
        </p>
      </div>
    </section>
  );
}

export default Academics;
