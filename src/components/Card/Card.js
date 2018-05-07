import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <img
        className="images"
        alt={props.name}
        src={props.image}
        onClick={() => props.scoringMeter(props.id)}
      />
    </div>
  );
};

export default Card;