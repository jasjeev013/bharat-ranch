import React, { useEffect, useState } from 'react'
import {  Row, Col, Table, Button } from 'react-bootstrap';
import { fetchAllEquipmentsForSpecificUser } from '../state/selectors/selectors';
import { useRecoilValueLoadable } from 'recoil';

const FarmerEquipmentsAdded = () => {
    const [equipments,setEquipments] = useState([]);
    const equipmentsLoadable = useRecoilValueLoadable(fetchAllEquipmentsForSpecificUser);

    useEffect(() => {
        if (equipmentsLoadable.state === 'hasValue') {
    
            setEquipments(equipmentsLoadable.contents);
        }
        
    }, [equipmentsLoadable, setEquipments]);

   

    if (equipmentsLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (equipmentsLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }
    



    return (
        <Row className="my-4">
            <Col>
                <h3>Equipments's Added:</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product No.</th>
                            <th>Equpment Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Lending</th>
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

                        {equipments.length !== 0 && equipments.map((equpment, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{equpment.name}</td>
                                <td>{equpment.qty}</td>
                                <td>{equpment.price}</td>
                                <td>Lending</td>
                                <td><Button variant="warning">Update</Button></td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}

export default FarmerEquipmentsAdded
