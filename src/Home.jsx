import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import backgroundImage from "./pexels-marcus-herzberg-1058277.jpg";
import yourImage from "./sydney-opera-house-1194736.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* First Division with Background Image */}
      <div
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", // Center the background image
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px", // Add padding for better responsiveness
        }}
      >
        <h5 style={{ color: "white" }}>MANU-HEGDE-CREATIONS</h5>

        {/* Lines in Two Different Colors */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "20px", // Add margin for separation
          }}
        >
          <h1 style={{ color: "yellow", fontSize: "24px" }}>
            DISCOVER YOUR CULINARY ADVENTURE
          </h1>
          <p style={{ color: "#2ecc71", fontSize: "16px", textAlign: "left" }}>
            Embark on a journey of flavors and aromas that will tantalize your
            taste buds. Explore a world of diverse cuisines and find your
            forever food. Let us guide you through a culinary experience like no
            other, where every dish tells a story.
          </p>
        </div>

        {/* Buttons in a Single Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px", // Add margin for separation
          }}
        >
          <button
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Search Now
          </button>
          <button
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Know More
          </button>
        </div>
      </div>

      {/* Third Division with Image and Titles */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "40px", // Add margin for separation
        }}
      >
        {/* Image on the left */}
        <div
          style={{
            flex: 1,
            marginRight: "20px",
            background: `url(${yourImage})`,
            backgroundSize: "100% 100%", // Adjusted backgroundSize property
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
          }}
        ></div>

        {/* Titles and Paragraphs on the right */}
        <div
          style={{
            flex: 2,
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ color: "#3498db", marginBottom: "10px" }}>
            Discover Culinary Delights
          </h1>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
            Embark on a journey of flavors and aromas that will transport you to
            different corners of the world. Our culinary adventures promise a
            delightful experience for your taste buds.
          </p>

          <h1
            style={{
              color: "#e74c3c",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Meet Our Master Chefs
          </h1>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
            Our team of expert chefs brings passion and innovation to the
            kitchen, creating mouthwatering dishes that showcase the best of
            culinary artistry.
          </p>

          <h1
            style={{
              color: "#27ae60",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Explore Diverse Cuisines
          </h1>
          <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.5" }}>
            Immerse yourself in a world of diverse cuisines, from traditional
            recipes to modern culinary creations. Discover the richness of
            flavors that our menu has to offer.
          </p>

          {/* Get in Touch Button */}
          <button
            style={{
              margin: "20px 0",
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "40px", // Add margin for separation
        }}
      >
        {/* Card components go here */}
        <Card statement="Gladis Lennon" subtitle="Head of SEO" />
        <Card statement="John Doe" subtitle="Executive Chef" />
        <Card statement="Jane Smith" subtitle="Marketing Manager" />
        <Card statement="Alex Johnson" subtitle="Food Critic" />
        <Card statement="Chris Brown" subtitle="Master Baker" />
        <Card statement="Eva White" subtitle="Sous Chef" />
        <Card statement="Mark Turner" subtitle="Culinary Artist" />
        <Card statement="Laura Davis" subtitle="Pastry Chef" />
        <Card statement="Daniel Clark" subtitle="Food Blogger" />
        <Card statement="Sophie Lewis" subtitle="Wine Connoisseur" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
