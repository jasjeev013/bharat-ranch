import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from 'react-rating-stars-component';

import {  useRecoilState,  useRecoilStateLoadable,  useRecoilValue } from 'recoil';
import { categoryCommoditiesState, categoryState } from '../state/atoms/atoms';
import { fetchCategory } from '../state/selectors/selectors';
import { useParams } from 'react-router-dom';

const Category = () => {
    const params = useParams();
    const category = useRecoilValue(categoryState);
    const [categoryCommodities,setCategoryCommodities] = useRecoilState(categoryCommoditiesState);
    const [commoditiesLoadable,setCommoditiesLoadable] = useRecoilStateLoadable(fetchCategory);
    
    useEffect(() => {
        setCommoditiesLoadable(params.category);
        if (commoditiesLoadable.state === 'hasValue') {
            setCategoryCommodities(commoditiesLoadable.contents);
        }
        // eslint-disable-next-line
    }, [commoditiesLoadable]);

    if (commoditiesLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (commoditiesLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }
    

    const handleRatingChange = (newRating, name) => {
        console.log(`New rating for ${name} is ${newRating}`);
        // You can handle the new rating (e.g., save it to state or send it to a server)
    };

    return (
        <div className="container mt-4">
            <h2>Category: {category}</h2>
            <div className="list-group">
                {categoryCommodities.length!==0 && categoryCommodities.map((tomato, index) => (
                    <div key={index} className="list-group-item list-group-item-action d-flex align-items-center my-3" style={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid black',
                        borderRadius: '10px'
                    }}>
                        <div className="flex-grow-1">
                            <div className='d-flex justify-content-between'>
                                <div>

                                    <h5 className="mb-1">{tomato.name}</h5>
                                    <p className="mb-1">{tomato.description}</p>
                                    <p className="mb-1">Given By: {tomato.givenBy} on {tomato.date}</p>
                                    <div className='mx-4'>
                                        <li>Total_qty : {tomato.total_qty}</li>
                                        <li>Min_qty : {tomato.min_qty}</li>
                                        <li>Price : {tomato.price}</li>
                                    </div>
                                    <div className="mt-2 mx-2">
                                        <Rating
                                            count={5}
                                            onChange={(newRating) => handleRatingChange(newRating, tomato.name)}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <button className="btn btn-warning btn-sm mb-2 my-2">GIVE DETAILS</button>
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
