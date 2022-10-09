import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function TopBar(props){

    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand onClick={() => navigate('/HCI_functional_prototype')}>EzShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <img
                        src="https://w7.pngwing.com/pngs/311/933/png-transparent-point-position-map-computer-icons-others-heart-logo-position.png"
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Position logo"
                    />
                    <span style={{textDecoration: 'underline'}}>60607 Chicago, IL</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value = {keyword}
                            onChange = { e => setKeyword(e.target.value)}
                        />
                        <Button variant="outline-success" onClick={() => navigate(`products?keyword=${keyword}`, {state: keyword})}>Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Orders</Nav.Link>
                        <Nav.Link href="#action2">Lists</Nav.Link>
                        <Nav.Link href="#action1">Cart</Nav.Link>
                        <Nav.Link href="#action2">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export{TopBar}