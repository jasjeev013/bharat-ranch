import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function FarmerDashboard() {
    return (
        <Container>
            <div className="my-4 d-flex justify-content-between">
                <div>
                    <h1>Hi Farmer</h1>
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
                            {/* Add more rows as needed */}
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
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default FarmerDashboard;
