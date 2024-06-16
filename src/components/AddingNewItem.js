import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddingNewItem = () => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    if (e.target.files.length > 0) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ itemName, quantity, price, photo });
  };

  return (
    <Container className="my-4 p-4" style={{ backgroundColor: '#f5e4ca', borderRadius: '10px' }}>
      <Row>
        <Col>
          <h3>Adding New Item</h3>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="my-3">
          <Col md={6}>
            <Form.Group controlId="formItemName">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formQuantity" className="my-3">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="d-flex flex-column align-items-center">
            <Form.Group controlId="formPhoto">
              <Form.Label>Add Photo</Form.Label>
              <Form.Control
                type="file"
                onChange={handlePhotoChange}
                className="mb-3"
              />
              {photo && (
                <Image src={photo} rounded style={{ width: '100%', height: 'auto' }} />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Button type="submit" variant="primary">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddingNewItem;
