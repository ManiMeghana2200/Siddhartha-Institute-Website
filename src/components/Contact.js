import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Us</h2>
      <p>Email: info@siddhartha.ac.in | Phone: +91-1234567890</p>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.371093603119!2d78.562112!3d17.530587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9016d272b5b7%3A0x856c1edff7f17c90!2sNarapally%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </section>
  );
}

export default Contact;
