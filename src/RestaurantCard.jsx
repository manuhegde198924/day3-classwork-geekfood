const RestaurantCard = (props) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        background: "red",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{props.name}</h2>
      <h3>Rating: {props.rating}</h3>
      <h4>Address: {props.address}</h4>
      <h5>Type of Food: {props.type_of_food}</h5>
    </div>
  );
};

export default RestaurantCard;
