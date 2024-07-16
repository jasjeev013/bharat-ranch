// Product.js
import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    const product = {
        image: 'https://via.placeholder.com/400x300',  // replace with the actual path
        givenBy: 'Depandra tiwari',
        date: '26-09-23',
        state: 'Uttar Pradesh',
        stock: '100kg',
        address: 'Basti, UP',
        price: '10,00',
        contactPerson: 'Depandra',
    };
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // const handleSendMessage = () => {
    //     console.log(message);
    // };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <div className='d-flex justify-content-start'>

                            <div>

                                <Card.Img variant="top" src={product.image} style={{
                                    padding: '10px',
                                    borderRadius: '20px'
                                }} />
                            </div>
                            <div>

                                <Card.Body>
                                    <Card.Title style={{
                                        fontSize: '2rem'

                                    }}>Organic cherry tomatoes</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Given By: {product.givenBy} on {product.date}
                                    </Card.Subtitle>
                                    <Form.Group className="mb-3 my-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your message"
                                            value={message}
                                            onChange={handleMessageChange}
                                            style={{
                                                height: '10rem',
                                                width: '20rem'
                                            }}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" className="mb-3">Send a message</Button>

                                </Card.Body>
                            </div>
                        </div>
                        <Card.Body>
                            <Card.Text>
                                <strong>Details:</strong>
                                <br />
                                &nbsp;&nbsp;-  State: {product.state}
                                <br />
                                &nbsp;&nbsp;- Available Stock: {product.stock}
                                <br />
                                &nbsp;&nbsp;- Address: {product.address}
                                <br />
                                &nbsp;&nbsp;- Price: {product.price}
                                <br />
                                &nbsp;&nbsp;- Contact person: {product.contactPerson}
                            </Card.Text>
                        </Card.Body>


                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
