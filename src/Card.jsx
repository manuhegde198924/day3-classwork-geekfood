import React from "react";

const Card = ({ iconClass, statement, subtitle }) => {
  return (
    <div
      style={{
        width: "200px",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        textAlign: "center",
        background: "gray", // Dark background
        color: "white", // White text color
      }}
    >
      <i
        className={`fas ${iconClass}`} // Use Font Awesome icon class
        style={{
          fontSize: "24px", // Adjust the icon size
          marginBottom: "10px",
        }}
      ></i>
      <h3 style={{ color: "#3498db", fontSize: "18px", marginBottom: "5px" }}>
        {statement}
      </h3>
      <p style={{ color: "#555", fontSize: "14px" }}>{subtitle}</p>
    </div>
  );
};

export default Card;
