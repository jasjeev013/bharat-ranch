
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import websitelogo from '../images/websiteLogo.png'
import bharatRanchWriting from '../images/bharatRanchWriting.png'
import AccountMenu from './AccountMenu';
import { Link } from 'react-router-dom';

function NavBar({ toggleSidebar }) {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary" style={{
                boxShadow: '0px 0px 10px 0px #000000',
                zIndex: '1000',
                position: 'fixed',
                width: '100%',
                top: '0',
                backgroundColor: 'rgb(235, 227, 212,1)',
            }} >
                {/* <button className="sidebar-toggle-btn mx-2 me-5" >
                </button> */}
                <i onClick={toggleSidebar}  class="fa-solid fa-bars mx-4" style={{
                    fontSize: '30px',
                    color: 'black',
                   
                }}/>
                <img src={websitelogo} alt="Logo" height={40} className='me-3' />
                <Navbar.Brand href="/"><img src={bharatRanchWriting} height={40} alt="bharatRanchWriting" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end mx-5" id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="fw-bold me-5 my-2 navBarButtons">Home</Link>
                        <Link to="/categories" className="fw-bold me-5 my-2 navBarButtons">Buy</Link>
                        <Link to="/lending" className="fw-bold me-5 my-2 navBarButtons">Lending</Link>
                        <Link to="/donations" className="fw-bold me-5 my-2 navBarButtons">Donations</Link>
                        <Link to="/help" className="fw-bold me-3 my-2 navBarButtons">Help</Link>
                        <AccountMenu/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;