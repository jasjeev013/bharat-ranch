import React from 'react'
import FarmerAddedProducts from './FarmerAddedProducts'
import FarmerEquipmentsAdded from './FarmerEquipmentsAdded'
import FarmerAllBuyRequests from './FarmerAllBuyRequests'
import FarmerAllBorrowRequests from './FarmerAllBorrowRequests'
import { Container } from 'react-bootstrap'

const FarmerItemsDashboard = () => {
    return (
        <div>
        
            <Container>
                {/* Products Added */}
                <FarmerAddedProducts />
                {/* Equipments Adeed */}
                <FarmerEquipmentsAdded />
                {/* All Buy Requests */}
                <FarmerAllBuyRequests />
                {/* All Borrowing Requests Requests */}
                <FarmerAllBorrowRequests />
            </Container>
        </div>
    )
}

export default FarmerItemsDashboard
