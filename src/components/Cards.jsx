import React from 'react';
import './Cards.css';
import card1Img from '../images/card1Img.jpg'
// https://dummyimage.com/340x360/eee/aaa
const Cards = () => {
  const cards = [
    {
      title: 'Buying & Selling of Crops',
      description: 'It will serve the major requirement of the farmers.They will be able to sell their commodities at a lower price and increse their margins at the same time, it will help the factories to but them ar a resonable rate. ',
      image: `${card1Img}`,
    },
    {
      title: 'Borrowing Of Tools',
      description: 'The farmers will be able to borrow the required tools at the minimal costs',
      image: `https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D`,
    },
    {
      title: 'Card 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: `https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D`,
    },
    {
      title: 'Card 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: `https://via.placeholder.com/350x200?text=Card+Image+$%7Bcard%7D`,
    }
  ]
  return (
    <div className='my-5' >
      <h1 className='text-center' style={{
        color: '#000000',
        fontSize: '60px',
        fontFamily: 'Rowdies',
        fontWeight: '900',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        margin: 'auto',
        padding: '20px',


      }}>OUR SERVICES</h1>
      <div className="cards-container">

        {cards.map((card, index) => (
          <div className="card" key={index} style={{ width: '22rem' }}>
            <img
              src={card.image}
              className="card-img-top"
              alt={`Card ${card.title}`}
            />
            <div className="card-body">
              <h5 className="card-title" style={{
                color: '#000000',
                fontSize: '22px',
                fontFamily: 'Maname',
                fontWeight: '900',
                fontStyle: 'normal',
                textTransform: 'uppercase',
                marginBottom: '20px'
           
              
              }}>{card.title}</h5>
              <p className="card-text">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
