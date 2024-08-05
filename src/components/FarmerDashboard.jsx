import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FarmerOrdersDashboard from './FarmerOrdersDashboard';
import FarmerItemsDashboard from './FarmerItemsDashboard';
import { userDetails } from '../state/atoms/atoms';
import { useRecoilValue } from 'recoil';

function FarmerDashboard() {
    const [itemBar,setItemBar] = useState(true);
    const userDet = useRecoilValue(userDetails);

    const setFarmerDashboard = (boools) => {
        setItemBar(boools);
    }

    return (
        <div>

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

                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <button class="nav-link" onClick={() => setFarmerDashboard(true)} >Your Orders <span class="sr-only">(current)</span></button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" onClick={() => setFarmerDashboard(false)} >Commodities & Equipments</button>
                            </li>
                        </ul>

                    </div>
                </nav>

                {itemBar && <FarmerOrdersDashboard/>}
                {!itemBar && <FarmerItemsDashboard/>}





            </Container>


        </div>

    );
};

export default FarmerDashboard;
