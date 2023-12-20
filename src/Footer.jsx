import React from "react";
import logoImage from "./3019f0fc31fdd6c9f4ec0f4536d1d227.png";
import facebookIcon from "./Untitled.jpeg";
import twitterIcon from "./Untitled.png";
import instagramIcon from "./untitile2.jpeg";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={logoImage}
        alt="GeekFoods Logo"
        style={{ width: "100px", height: "100px" }}
      />
      {/* About Paragraph */}
      <p>
        GeekFoods is your go-to platform for exploring the world of delicious
        and innovative foods. We strive to bring you the best culinary
        experiences and satisfy your taste buds.
      </p>
      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <a
          href="/about"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>About</h4>
        </a>
        <a
          href="/careers"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>Careers</h4>
        </a>
        <a
          href="/history"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>History</h4>
        </a>
        <a
          href="/services"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>Services</h4>
        </a>
        <a
          href="/projects"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>Projects</h4>
        </a>
        <a
          href="/blog"
          style={{ textDecoration: "none", color: "black", margin: "0 10px" }}
        >
          <h4>Blog</h4>
        </a>
      </div>
      {/* Social Media Icons */}
      <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookIcon}
            alt="Facebook Icon"
            style={{ width: "30px", height: "30px", margin: "5px" }}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src={twitterIcon}
            alt="Twitter Icon"
            style={{ width: "30px", height: "30px", margin: "5px" }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram Icon"
            style={{ width: "30px", height: "30px", margin: "5px" }}
          />
        </a>
        {/* Add more social media icons as needed */}
      </div>
      {/* Copyright */}
      <p>&copy; 2023 GeekFoods</p>
    </footer>
  );
};

export default Footer;
