import React, { useEffect, useState } from 'react';
import { fetchAllBorrowedEquipments } from '../state/selectors/selectors';
import { useRecoilValueLoadable } from 'recoil';
import { Row, Col, Table } from 'react-bootstrap';

const FarmerBorrowedEquipments = () => {



    const [borrowedEquipments, setBorrowedEquipments] = useState([]);
    const borrowedEuipmentsLoadable = useRecoilValueLoadable(fetchAllBorrowedEquipments);

    useEffect(() => {
        if (borrowedEuipmentsLoadable.state === 'hasValue') {

            setBorrowedEquipments(borrowedEuipmentsLoadable.contents);
        }

    }, [borrowedEuipmentsLoadable, setBorrowedEquipments]);



    if (borrowedEuipmentsLoadable.state === 'loading') {
        return <div>Loading...</div>;
    }

    if (borrowedEuipmentsLoadable.state === 'hasError') {
        return <div>Error loading categories.</div>;
    }


    return (
        <div>
            <Row className="my-4">
                <Col>
                    <h3>Borrowed Equipments:</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product No.</th>
                                <th>Equipment Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Status</th>
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
                                    Pending
                                </td>
                                <td>None</td>
                            </tr>
                            {borrowedEquipments.length !== 0 && borrowedEquipments.map((borrowRequest, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{borrowRequest.equipment_id.name}</td>
                                    <td>{borrowRequest.qty}</td>
                                    <td>{borrowRequest.equipment_id.price}</td>
                                    <td>
                                        {borrowRequest.status}
                                    </td>
                                    <td>None</td>
                                </tr>
                            ))}
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </div>
    )
}

export default FarmerBorrowedEquipments
