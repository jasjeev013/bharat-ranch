import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userDetails } from '../state/atoms/atoms';


const FarmerNavbar = () => {
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

            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/farmer/orders">Your Orders <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/farmer/items">Commodities & Equipments</a>
                        </li>
                    </ul>

                </div>
            </nav>





        </Container>
    )
}

export default FarmerNavbar
