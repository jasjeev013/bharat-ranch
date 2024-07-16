import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Tomatoes', image: 'https://via.placeholder.com/300', count: 108 },
        { id: 2, name: 'Apples', image: 'https://via.placeholder.com/300', count: 59 },
        { id: 3, name: 'Bottle Gourd', image: 'https://via.placeholder.com/300', count: 23 },
        { id: 4, name: 'Beetroot', image: 'https://via.placeholder.com/300', count: 78 },
        { id: 5, name: 'Broccoli', image: 'https://via.placeholder.com/300', count: 12 },
        { id: 6, name: 'Cabbage', image: 'https://via.placeholder.com/300', count: 8 },
        { id: 7, name: 'Wheat', image: 'https://via.placeholder.com/300', count: 78 },
        { id: 8, name: 'Maize', image: 'https://via.placeholder.com/300', count: 48 },
        { id: 9, name: 'Rice', image: 'https://via.placeholder.com/300', count: 48 },
        { id: 10, name: 'Oats', image: 'https://via.placeholder.com/300', count: 48 },
        { id: 11, name: 'Barley', image: 'https://via.placeholder.com/300', count: 48 },
    ];

    return (
        <div className="container mt-5">
            <header className="text-center mb-5">
                <h1 className="display-4">Categories</h1>
            </header>
            <div className="row">
                {categories.map(category => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={category.id}>
                        <div className="card  h-100 ">
                            <img
                                src={category.image}
                                className="card-img-top"
                                alt={category.name}
                                style={{ height: '200px', objectFit: 'cover', padding: '0.2rem', borderRadius: '' }}
                            />
                            <div className="card-body text-center">
                                <div className='d-flex justify-content-between'>

                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">Count: {category.count}</p>
                                </div>
                                <br />
                                <br />
                                <div className="d-flex justify-content-end">

                                    <Link to={`/category/${category.id}`} className="btn btn-primary ">
                                        More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
