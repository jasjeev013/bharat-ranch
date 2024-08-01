import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddingNewItem = () => {
  const [commodity,setCommodity]= useState({name: '',description:'',image:null,price:0,min_qty:0,total_qty:0,category:''});
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const changeInput = (e,target) => {
    setCommodity({...commodity,[e.target.name]:e.target.value});
  }

  const handlePhotoChange = (e) => {
  
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setCommodity({...commodity,image:e.target.files[0]});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in commodity) {
      formDataToSend.append(key, commodity[key]);
    }


    // Handle form submission
    try {
      console.log(formDataToSend)
      const response = await axios.post('http://localhost:5000/commodities/',formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
        withCredentials: true, // Include credentials (e.g., cookies) in the request
      });
      const data = response.data;
      if(data.result){
        console.log('Item added successfully');
        navigate('/farmer')
        
      }
    } catch (error) {
      console.log(error)
      // setErrors(error.response.data.errors);
    }

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
                name='name'
                value={commodity.name}
                onChange={(e) => changeInput(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formItemName">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                name='description'
                value={commodity.description}
                onChange={(e) => changeInput(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formQuantity" className="my-3">
              <Form.Label>Min Quantity:</Form.Label>
              <Form.Control
                type="number"
                name='min_qty'
                value={commodity.min_qty}
                onChange={(e) => changeInput(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formQuantity" className="my-3">
              <Form.Label>Total Quantity:</Form.Label>
              <Form.Control
                type="number"
                name='total_qty'
                value={commodity.total_qty}
                onChange={(e) => changeInput(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                name='price'
                value={commodity.price}
                onChange={(e) => changeInput(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Category:</Form.Label>
              <Form.Control
                type="text"
                name='category'
                value={commodity.category}
                onChange={(e) => changeInput(e)}
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
              {image && (
                <Image src={image} rounded style={{ width: '100%', height: 'auto' }} />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
          {errors.map((error) => {
                return <Alert severity="error" className='text-center w-75' style={{
                    marginLeft: '90px',
                }}>{error.msg}</Alert>
            })}
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
