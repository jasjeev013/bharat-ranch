import React from 'react';
import { Container,  Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDetails } from '../state/atoms/atoms';
import FarmerAddedProducts from './FarmerAddedProducts';
import FarmerEquipmentsAdded from './FarmerEquipmentsAdded';
import FarmerAllBuyRequests from './FarmerAllBuyRequests';
import FarmerAllBorrowRequests from './FarmerAllBorrowRequests';


function FarmerDashboard() {
    const userDet = useRecoilValue(userDetails);



    return (
        <Container>
            <div className="my-4 d-flex justify-content-between">
                <div>
                    <h1>Hi {userDet.name}</h1>
                </div>
                <div>
                    <Button className='mx-2' variant="primary"><Link className='farmerButtons' to="/addingNewItem">+ New Commodity</Link> </Button>
                    <Button className='mx-2' variant="primary"><Link className='farmerButtons' to="/addNewEquipment">+ New Equipment</Link> </Button>
                </div>
            </div>

            {/* Products Added */}
            <FarmerAddedProducts/>

            {/* Equipments Adeed */}
            <FarmerEquipmentsAdded/>
            {/* All Buy Requests */}
            <FarmerAllBuyRequests/>
            {/* All Borrowing Requests Requests */}
            <FarmerAllBorrowRequests/>
            
        </Container>
    );
};

export default FarmerDashboard;
