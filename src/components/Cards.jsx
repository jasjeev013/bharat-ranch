import React from 'react';
import './Cards.css';
import card1Img from '../images/card1Img.jpg'
import card2Img from '../images/card2Img.jpg'
import card3Img from '../images/card3Img.jpg'
import card4Img from '../images/card4Img.jpg'

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
      description: 'The farmers will be able to borrow the required tools at minimal costs" highlights a key benefit of this program. By allowing farmers to access tools without the heavy financial burden of purchasing them outright, it fosters sustainability and productivity in agriculture.',
      image: `${card2Img}`,
    },
    {
      title: 'Buying & Selling of Crops',
      description: 'The farmers will be able to raise money in the form of donations. Any individual or any NGO will be able to donate any amount as per their choice" highlights a supportive funding mechanism for farmers engaged in buying and selling crops.  ',
      image: `${card3Img}`,
    },
    {
      title: 'Farmer\'s Support',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: `${card4Img}`,
    }
  ]
  return (
    <div className='my-5' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
          <div className="card" key={index} style={{
            width: '22rem',
            backgroundColor: 'rgb(210,117,157,0.5)',
          }}>
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
