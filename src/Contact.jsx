import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Left Side - Contact Information */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Contact Us</h2>
          <p>GET IN TOUCH WITH US</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>

          <h3>Our Location</h3>
          <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>

          <h3>Phone Number</h3>
          <p>(+62)81 414 257 9980</p>

          <h3>Email Address</h3>
          <p>info@yourdomain.com</p>
        </div>

        {/* Right Side - Contact Form */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>Contact Form</h2>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
