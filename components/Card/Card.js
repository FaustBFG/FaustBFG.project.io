import React from 'react';
import './Card.css';

function Card({ title, price, address, distance, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3>{title}</h3>
        {price && <p>{price}</p>}
        {address && <p>{address}</p>}
        {distance && <p>{distance}</p>}
      </div>
    </div>
  );
}

export default Card;
