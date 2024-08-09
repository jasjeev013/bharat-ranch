import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { userDetails } from '../state/atoms/atoms';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { fetchAllCustomerBuyRequests } from '../state/selectors/selectors';



const CustomerDashboard = () => {
    const userDetail = useRecoilValue(userDetails);

    const [buyRequests, setBuyRequests] = useState([]);
    const buyRequestsLoadable = useRecoilValueLoadable(fetchAllCustomerBuyRequests);
 
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

    return (
        <Container>
            <div className="my-4 d-flex justify-content-between">
                <div>
                    <h1>Hi {userDetail.name}</h1>
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
                           
                            {/* Add more rows as needed */}

                            {buyRequests.length!==0 && buyRequests.map((buyRequest,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{buyRequest.commodity_id.name}</td>
                                    <td>{buyRequest.quantity}</td>
                                    <td>{buyRequest.commodity_id.price}</td>
                                    <td>{buyRequest.status}</td>
                                    <td>None</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default CustomerDashboard;
