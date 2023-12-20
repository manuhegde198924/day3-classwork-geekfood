import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import RestaurantCard from "./RestaurantCard";
import Footer from "./Footer"; // Import the Footer component
import restaurantList from "./RestaurantList.json";

const Restaurants = () => {
  const [restaurantData, setRestaurantData] = useState(restaurantList);

  let searchKey = "";
  let inputRating = 0;

  const onSearchChange = (e) => {
    if (e.target.id === "searchBox") {
      searchKey = e.target.value;
    } else if (e.target.id === "ratingBox") {
      inputRating = e.target.value;
      if (!e.target.value) {
        inputRating = 0;
      }
    }
    const filteredList = restaurantList.filter(
      (data) =>
        data.name.toLowerCase().includes(searchKey.toLowerCase()) &&
        data.rating >= inputRating
    );
    setRestaurantData(filteredList);
  };

  return (
    <>
      <Navbar /> {/* Add Navbar component here */}
      <section style={{ textAlign: "center", marginTop: "20px" }}>
        <label htmlFor="searchBox">Search restaurants:</label>
        <br />
        <input
          type="text"
          placeholder="Search restaurants.."
          onChange={onSearchChange}
          id="searchBox"
          style={{ margin: "10px", padding: "10px" }}
        />
        <br />
        <label htmlFor="ratingBox">Filter by rating:</label>
        <br />
        <input
          type="number"
          step="1"
          min={1}
          max={5}
          onChange={onSearchChange}
          id="ratingBox"
          style={{ margin: "10px", padding: "10px" }}
        />
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {restaurantData.map((restaurantDetails) => (
          <RestaurantCard
            key={restaurantDetails._id._id}
            {...restaurantDetails}
          />
        ))}
      </section>
      <Footer /> {/* Add Footer component here */}
    </>
  );
};

export default Restaurants;
