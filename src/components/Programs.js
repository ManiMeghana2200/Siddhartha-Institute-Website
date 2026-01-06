import React, { useRef } from "react";
import "./Programs.css";
import {
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
  FaRobot,
  FaNetworkWired,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

function Programs() {
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
    <section className="programs-section" id="programs">
      {/* Header */}
      <div className="programs-header">
        <h2>Our Academic Programs</h2>
        <p>
          At Siddhartha Institute of Technology & Sciences, we offer a wide
          spectrum of programs that combine academic rigor with practical
          learning. Our goal is to shape innovative engineers, entrepreneurs,
          and leaders for the future.
        </p>
      </div>

      {/* Arrows */}
      <div className="programs-arrows">
        <button className="arrow-btn left" onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>
        <button className="arrow-btn right" onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
      </div>

      {/* Program Cards */}
      <div className="programs-scroll" ref={scrollRef}>
        <div className="program-card">
          <FaLaptopCode className="program-icon" />
          <h3>Computer Science & Engineering</h3>
          <p>
            Explore AI, ML, Cloud Computing, and Cybersecurity with
            hands-on training and innovation projects.
          </p>
        </div>

        <div className="program-card">
          <FaCogs className="program-icon" />
          <h3>Mechanical Engineering</h3>
          <p>
            Focus on product design, robotics, and thermodynamics with
            modern manufacturing labs.
          </p>
        </div>

        <div className="program-card">
          <FaProjectDiagram className="program-icon" />
          <h3>Civil Engineering</h3>
          <p>
            Gain expertise in sustainable infrastructure and structural
            engineering with on-site learning.
          </p>
        </div>

        <div className="program-card">
          <FaNetworkWired className="program-icon" />
          <h3>Electronics & Communication</h3>
          <p>
            Learn about IoT, VLSI, and Communication Systems with industry-based
            mentorship.
          </p>
        </div>

        <div className="program-card">
          <FaRobot className="program-icon" />
          <h3>AI & Machine Learning</h3>
          <p>
            Master intelligent algorithms and neural networks for
            real-world AI innovation.
          </p>
        </div>

        <div className="program-card">
          <FaChartLine className="program-icon" />
          <h3>Master of Business Administration</h3>
          <p>
            Develop leadership and analytical skills with a focus on
            management, marketing, and finance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programs;
