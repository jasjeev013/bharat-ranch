
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AddNewEquipment = () => {
    const [equipment, setEquipment] = useState({ name:'',image:null,description:'',price:0,qty:0});
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const changeInput = (e, target) => {
        setEquipment({ ...equipment, [e.target.name]: e.target.value });
    }

    const handlePhotoChange = (e) => {

        if (e.target.files.length > 0) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setEquipment({ ...equipment, image: e.target.files[0] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in equipment) {
            formDataToSend.append(key, equipment[key]);
        }
    


        // Handle form submission
        try {
            console.log(formDataToSend)
            const response = await axios.post('http://localhost:5000/equipments/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Required for file uploads
                },
                withCredentials: true, // Include credentials (e.g., cookies) in the request
            });
            const data = response.data;
            if (data.result) {
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
                    <h3>Adding New Equipment</h3>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                <Row className="my-3">
                    <Col md={6}>
                        <Form.Group controlId="formItemName">
                            <Form.Label>Equipment Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name='name'
                                value={equipment.name}
                                onChange={(e) => changeInput(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formItemName">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name='description'
                                value={equipment.description}
                                onChange={(e) => changeInput(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control
                                type="number"
                                name='qty'
                                value={equipment.qty}
                                onChange={(e) => changeInput(e)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type="number"
                                name='price'
                                value={equipment.price}
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
    )
}

export default AddNewEquipment
