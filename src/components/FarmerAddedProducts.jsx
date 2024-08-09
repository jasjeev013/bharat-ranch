import React, { useEffect, useState } from 'react';
import {  Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchAllCommodities } from '../state/selectors/selectors';
import {  useRecoilValueLoadable } from 'recoil';


const FarmerAddedProducts = () => {
    const [commodities, setCommodities] = useState([]);
    const commoditiesLoadable = useRecoilValueLoadable(fetchAllCommodities);



    useEffect(() => {
        if (commoditiesLoadable.state === 'hasValue') {
    
            setCommodities(commoditiesLoadable.contents);
        }
        
    }, [commoditiesLoadable, setCommodities]);
    if (commoditiesLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (commoditiesLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }
  return (
    <Row className="my-4">
                <Col>
                    <h3>Product's Added:</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product No.</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Selling/Sold</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                    
                        </thead>
                        <tbody>
                            {/* Sample data row, you can map through your data here */}
                            
                     
                            {commodities.length!==0 && commodities.map((commodity,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{commodity.name}</td>
                                    <td>{commodity.total_qty}</td>
                                    <td>{commodity.price}</td>
                                    <td>Selling</td>
                                    <td><Button variant="warning">Update</Button></td>
                                    <td><Button variant="danger">Delete</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
  )
}

export default FarmerAddedProducts
