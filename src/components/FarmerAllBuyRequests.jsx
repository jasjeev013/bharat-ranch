import React, { useEffect, useState } from 'react';
import {  Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  fetchBuyRequests } from '../state/selectors/selectors';
import { useRecoilValueLoadable } from 'recoil';
import axios from 'axios';


const FarmerAllBuyRequests = () => {
    const [buyRequests, setBuyRequests] = useState([]);
    const buyRequestsLoadable = useRecoilValueLoadable(fetchBuyRequests);
 
    useEffect(() => {
        if (buyRequestsLoadable.state === 'hasValue') {
    
            setBuyRequests(buyRequestsLoadable.contents);
        }
        
    }, [buyRequestsLoadable, setBuyRequests]);

   

    if (buyRequestsLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (buyRequestsLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }


    const updateCommodity = async (e,id) => {
        const response = await axios.put(`http://localhost:5000/buy-requests/${id}`,{status: e.target.name},{ withCredentials: true})
        console.log(response.data)
    }

  return (
    <Row className="my-4">
                <Col>
                    <h3>Buy Requests:</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product No.</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Accept/Reject</th>
                                <th>Remarks</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {/* Sample data row, you can map through your data here */}
                        
                            {buyRequests.length!==0 && buyRequests.map((buyRequest,index) => (
                                <tr key={index}>
                                   
                                    <td>{index+1}</td>
                                    <td>{buyRequest.commodity_id.name}</td>
                                    <td>{buyRequest.quantity}</td>
                                    <td>{buyRequest.commodity_id.price}</td>
                                    <td>
                                        {(buyRequest.status === 'pending') &&
                                        <Button name='accepted' onClick={(e) => updateCommodity(e,buyRequest._id)} variant="success">Accept</Button>}
                                        {' '}
                                        { (buyRequest.status === 'pending') && 
                                        <Button name='rejected' onClick={(e) => updateCommodity(e,buyRequest._id)} variant="danger">Reject</Button>}
                                        {(buyRequest.status!=='pending') && buyRequest.status}
                                    </td>
                                    <td>None</td>
                                </tr>
                            ))}
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Col>
            </Row>

  )
}

export default FarmerAllBuyRequests
