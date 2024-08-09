import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { fetchAllBorrowRequests } from '../state/selectors/selectors';
import { useRecoilValueLoadable } from 'recoil';
import axios from 'axios';

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

    const updateBorrowRequest = async (e, id) => {

        const response = await axios.put(`http://localhost:5000/borrow-requests/equipment/${id}`, { status: e.target.name }, { withCredentials: true });
        console.log(response.data);

    }




    return (

        <Row className="my-4">
            <Col>
                <h3>Borrow Requests:</h3>
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
                    
                        {borrowRequests.length !== 0 && borrowRequests.map((borrowRequest, index) => (
                            <tr key={index}>
                            
                                <td>{index + 1}</td>
                                <td>{borrowRequest.equipment_id.name}</td>
                                <td>{borrowRequest.qty}</td>
                                <td>{borrowRequest.equipment_id.price}</td>
                                <td>

                                    {borrowRequest.status === 'pending' && <Button name='Accepted' className='mx-2' onClick={(e) => updateBorrowRequest(e, borrowRequest._id)} variant="success">Accept</Button>}
                                    {borrowRequest.status === 'pending' && <Button name='Rejected' className='mx-2' onClick={(e) => updateBorrowRequest(e, borrowRequest._id)} variant="danger">Reject</Button>}
                                    {borrowRequest.status !== 'pending' && borrowRequest.status}
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
