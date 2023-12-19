import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function HeaderComponent() {
    return (
        <div
            style={{ padding: "1em" }}
            className="bg-light">
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="#home">Iluztro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/collection-a">
                            <Nav.Link>Collection A</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/collection-b">
                            <Nav.Link>Collection B</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/collection-c">
                            <Nav.Link>Collection C</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacts">
                            <Nav.Link>Contacts</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

