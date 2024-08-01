import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { fetchAllCommodities, fetchBuyRequests } from '../state/selectors/selectors';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { userDetails } from '../state/atoms/atoms';


function FarmerDashboard() {
    const userDet = useRecoilValue(userDetails);
    const [buyRequests, setBuyRequests] = useState([]);
    const [commodities, setCommodities] = useState([]);
    const buyRequestsLoadable = useRecoilValueLoadable(fetchBuyRequests);
    const commoditiesLoadable = useRecoilValueLoadable(fetchAllCommodities);

    useEffect(() => {
        if (buyRequestsLoadable.state === 'hasValue') {
    
            setBuyRequests(buyRequestsLoadable.contents);
        }
        
    }, [buyRequestsLoadable, setBuyRequests]);

    useEffect(() => {
        if (commoditiesLoadable.state === 'hasValue') {
    
            setCommodities(commoditiesLoadable.contents);
        }
        
    }, [commoditiesLoadable, setCommodities]);

    if (buyRequestsLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (buyRequestsLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }
    if (commoditiesLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (commoditiesLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }



    return (
        <Container>
            <div className="my-4 d-flex justify-content-between">
                <div>
                    <h1>Hi {userDet.name}</h1>
                </div>
                <div>
                    <Button variant="primary"><Link className='farmerButtons' to="/addingNewItem">+ New Item</Link> </Button>
                </div>
            </div>

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
                            <tr>
                                <td>1</td>
                                <td>Product 1</td>
                                <td>10</td>
                                <td>$100</td>
                                <td>Selling</td>
                                <td><Button variant="warning">Update</Button></td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                            {console.log(buyRequests)}
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
            <Row className="my-4">
                <Col>
                    <h3>Buyer's Request:</h3>
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
                            {buyRequests.length!==0 && buyRequests.map((buyRequest,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{buyRequest.commodity_id.name}</td>
                                    <td>{buyRequest.quantity}</td>
                                    <td>{buyRequest.commodity_id.price}</td>
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
        </Container>
    );
};

export default FarmerDashboard;
