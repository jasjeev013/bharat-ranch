import React from 'react';
import './Cards.css';

const Cards = () => {
  return (
    <div >
<h1 className='text-center'>OUR SERVICES</h1>
    <div className="cards-container">
        
      {[1, 2, 3, 4].map((card, index) => (
        <div className="card" key={index} style={{ width: '20rem' }}>
          <img
            src={`https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D`}
            className="card-img-top"
            alt={`Card ${card}`}
          />
          <div className="card-body">
            <h5 className="card-title">Card title {card}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
