import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from 'react-rating-stars-component';
import {  Form } from 'react-bootstrap';
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil';
import { categoryCommoditiesState, categoryState, isLoggedIn, userDetails } from '../state/atoms/atoms';
import { fetchCategory } from '../state/selectors/selectors';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const params = useParams();
    const category = useRecoilValue(categoryState);
    const isLoggedin = useRecoilValue(isLoggedIn);
    const userLoggedIn = useRecoilValue(userDetails);
    const [categoryCommodities, setCategoryCommodities] = useRecoilState(categoryCommoditiesState);
    const [commoditiesLoadable, setCommoditiesLoadable] = useRecoilStateLoadable(fetchCategory);
    






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



    const putBuyRequest = async (commodity_id, quantity) => {
        const response = await axios.post('http://localhost:5000/buy-requests/', { commodity_id, quantity }, {
            withCredentials: true // This is important to handle cookies
        });
        console.log(response.data);
    }


    const handleRatingChange = (newRating, name) => {
        console.log(`New rating for ${name} is ${newRating}`);
        // You can handle the new rating (e.g., save it to state or send it to a server)
    };

    return (
        <div className="container mt-4">

            <h2>Category: {category}</h2>
            <div className="list-group">
                {categoryCommodities.length !== 0 && categoryCommodities.map((commodity, index) => (
                    <div key={index} className="list-group-item list-group-item-action d-flex align-items-center my-3" style={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        border: '1px solid black',
                        borderRadius: '10px'
                    }}>
                        {console.log(commodity)}
                        {console.log(userLoggedIn)}
                        <div className="flex-grow-1">
                            <div className='d-flex justify-content-between'>
                                <div>

                                    <h5 className="mb-1">{commodity.name}</h5>
                                    <p className="mb-1">{commodity.description}</p>
                                    <p className="mb-1">Given By: {commodity.givenBy} on {commodity.date}</p>
                                    <div className='mx-4'>
                                        <li>Total_qty : {commodity.total_qty}</li>
                                        <li>Min_qty : {commodity.min_qty}</li>
                                        <li>Price : {commodity.price}</li>
                                    </div>
                                    <div className="mt-2 mx-2">
                                        <Rating
                                            count={5}
                                            onChange={(newRating) => handleRatingChange(newRating, commodity.name)}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        {isLoggedin && commodity.user_email !== userLoggedIn.email && <button onClick={() => putBuyRequest(commodity._id, commodity.min_qty)} className="btn btn-warning btn-sm mb-2 my-2" >BUY ITEM</button>}
                                            {isLoggedin && commodity.user_email !== userLoggedIn.email && <Form.Control
                                                type="number"
                                                name='min_qty'
                                                style={{
                                                    width: '50%',
                                                    height: '100%',
                                                    borderRadius: '10px',
                                                    border: '1px solid black'
                                                }}
                                                className='mx-2 my-3'
                                                value={commodity.min_qty}
                                                // onChange={(e) => changeInput(e)}     
                                                required
                                            />}
                                    </div>

                                </div>

                                <div>

                                    <img src={commodity.image} className="rounded mr-3" alt={commodity.name} style={{ width: '50%', height: '100%' }} />
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
