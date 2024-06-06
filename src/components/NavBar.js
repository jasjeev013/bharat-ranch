
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Navbar.Brand href="/">bharatRanch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end mx-5" id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="fw-bold me-5">Home</Nav.Link>
                        <Nav.Link href="/" className="fw-bold me-5">Buy/Sell</Nav.Link>
                        <Nav.Link href="/" className="fw-bold me-5">Donations</Nav.Link>
                        <Nav.Link href="/" className="fw-bold me-5">Help</Nav.Link>
                        <Nav.Link href="/" className="fw-bold me-5">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;