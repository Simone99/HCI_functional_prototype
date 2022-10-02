import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CategoryBar(props){
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '150px'}}
                    navbarScroll
                >
                    <NavDropdown title="Deals" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Deals 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Deals 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Deals 3
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Bakery" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Bakery 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Bakery 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Bakery 3
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Fruits" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Fruits 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Fruits 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Fruits 3
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Vegetables" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Vegetables 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Vegetables 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Vegetables 3
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Dairy" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Dairy 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Dairy 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Dairy 3
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Meat &amp; Pultry" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Meat &amp; Pultry 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Meat &amp; Pultry 2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Meat &amp; Pultry 3
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}

export{CategoryBar}