// Quotes.js

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const QuoteCard = ({ quote }) => {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        fontSize: "27px",
      }}
    >
      <p>{quote}</p>
    </div>
  );
};

const Quotes = () => {
  // Assuming you have an array of quotes
  const foodQuotes = [
    "Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.",
    "The only time to eat diet food is while you're waiting for the steak to cook.",
    "Food is symbolic of love when words are inadequate.",
    "Good food is the foundation of genuine happiness.",
    "There is no sincerer love than the love of food.",
    "One cannot think well, love well, sleep well, if one has not dined well.",
    "Tell me what you eat, and I will tell you what you are.",
    "The only thing I like better than talking about food is eating.",
    "Food is an important part of a balanced diet.",
    "People who love to eat are always the best people.",
    "I get way too much happiness from good food.",
    "Life is a combination of magic and pasta.",
    "I am not a glutton - I am an explorer of food.",
    "Food is our common ground, a universal experience.",
    "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "Food brings people together on many different levels. It's the nourishment of the soul and body; it's truly love.",
    "If you really want to make a friend, go to someone's house and eat with them... the people who give you their food give you their heart.",
    "The only time to eat diet food is while you're waiting for the steak to cook.",
    "I get way too much happiness from good food.",
    "To eat is a necessity, but to eat intelligently is an art.",
    "One of the very nicest things about life is the way we must regularly stop whatever it is we are doing and devote our attention to eating.",
    "Food is an important part of a balanced diet.",
    "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
    "People want honest, flavorful food, not some show-off meal that takes days to prepare.",
    "Food is our common ground, a universal experience.",
    "You don't need a silver fork to eat good food.",
    "Let food be thy medicine and medicine be thy food.",
    "First we eat, then we do everything else.",
  ];
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Quotes</h2>
        <div>
          {foodQuotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quotes;
