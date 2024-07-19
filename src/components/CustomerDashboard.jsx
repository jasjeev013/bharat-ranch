import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomerDashboard = () => {
    return (
        <Container>
            <div className="my-4 d-flex justify-content-between">
                <div>
                    <h1>Hi Farmer</h1>
                </div>
                {/* <div>
                    <Button variant="primary">+ New Item</Button>
                </div> */}
            </div>


            <Row className="my-5">
                <Col>
                    <h3>Item's Ordered</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product No.</th>
                                <th>Product Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Order Status</th>
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
                                <td>Order Dispatched</td>
                                <td>None</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default CustomerDashboard;
