import React, { useEffect, useState } from 'react';
import {  Row, Col, Table, Button } from 'react-bootstrap';
import { fetchAllBorrowRequests } from '../state/selectors/selectors';
import { useRecoilValueLoadable } from 'recoil';

const FarmerAllBorrowRequests = () => {
    const [borrowRequests, setBorrowRequests] = useState([]);
    const borrowRequestsLoadable = useRecoilValueLoadable(fetchAllBorrowRequests);
 
    useEffect(() => {
        if (borrowRequestsLoadable.state === 'hasValue') {
    
            setBorrowRequests(borrowRequestsLoadable.contents);
        }
        
    }, [borrowRequestsLoadable, setBorrowRequests]);

   

    if (borrowRequestsLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (borrowRequestsLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }
    return (

        <Row className="my-4">
        <Col>
            <h3>Buyer's Request:</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product No.</th>
                        <th>Equipment Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Accept/Reject</th>
                        <th>Remarks</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {/* Sample data row, you can map through your data here */}
                    <tr>
                        <td>1</td>
                        <td>Product 1</td>
                        <td>5</td>
                        <td>$50</td>
                        <td>
                            <Button variant="success">Accept</Button>{' '}
                            <Button variant="danger">Reject</Button>
                        </td>
                        <td>None</td>
                    </tr>
                    {borrowRequests.length!==0 && borrowRequests.map((borrowRequest,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{borrowRequest.equipment_id.name}</td>
                            <td>{borrowRequest.qty}</td>
                            <td>{borrowRequest.equipment_id.price}</td>
                            <td>
                                <Button variant="success">Accept</Button>{' '}
                                <Button variant="danger">Reject</Button>
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

export default FarmerAllBorrowRequests
