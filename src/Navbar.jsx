import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        height: "60px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: 0, color: "blue" }}>MANOJ-HEGDE-FOODS</h1>
          {/* Add icons as needed */}
          <span style={{ marginLeft: "10px", color: "white" }}>
            <i className="fas fa-star"></i>
          </span>

          <span style={{ marginLeft: "10px", color: "white" }}>
            <i className="fas fa-rocket"></i>
          </span>
        </div>

        {/* Middle Section */}
        <ul
          style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}
        >
          <li style={{ margin: "0 20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link
              to="/quotes"
              style={{ textDecoration: "none", color: "white" }}
            >
              Quotes
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link
              to="/restaurants"
              style={{ textDecoration: "none", color: "white" }}
            >
              Restaurants
            </Link>
          </li>
          <li style={{ margin: "0 20px" }}>
            <Link
              to="/foods"
              style={{ textDecoration: "none", color: "white" }}
            >
              Foods
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
