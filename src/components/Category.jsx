import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from 'react-rating-stars-component';

const Category = () => {
    const tomatoes = [
        {
            name: 'Cherry tomatoes',
            givenBy: 'Depandra tiwari',
            date: '26-09-23',
            image: 'https://via.placeholder.com/300x200' // Dummy image URL
        },
        {
            name: 'Desi tomato',
            givenBy: 'Mahesh kumar',
            date: '22-09-23',
            image: 'https://via.placeholder.com/300x200' // Dummy image URL
        },
        {
            name: 'Tomato (Rome)',
            givenBy: 'Depandra tiwari',
            date: '26-09-23',
            image: 'https://via.placeholder.com/300x200' // Dummy image URL
        }
    ];

    const handleRatingChange = (newRating, name) => {
        console.log(`New rating for ${name} is ${newRating}`);
        // You can handle the new rating (e.g., save it to state or send it to a server)
    };

    return (
        <div className="container mt-4">
            <h2>Category: Tomatoes</h2>
            <div className="list-group">
                {tomatoes.map((tomato, index) => (
                    <div key={index} className="list-group-item list-group-item-action d-flex align-items-center my-3" style={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid black',
                        borderRadius: '10px'
                    }}>
                        <div className="flex-grow-1">
                            <div className='d-flex justify-content-between'>
                                <div>

                                    <h5 className="mb-1">{tomato.name}</h5>
                                    <p className="mb-1">Given By: {tomato.givenBy} on {tomato.date}</p>
                                    <button className="btn btn-warning btn-sm mb-2 my-4">GIVE DETAILS</button>
                                    <div className="mt-2">
                                        <Rating
                                            count={5}
                                            onChange={(newRating) => handleRatingChange(newRating, tomato.name)}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                </div>
                                <div>

                                    <img src={tomato.image} className="rounded mr-3" alt={tomato.name} style={{ width: '100%', height: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
