import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CollectionPages } from "../data/collections";

export function HeaderComponent() {

    const renderCollectionPages = () => {
        return CollectionPages.map((page, index) => {
            return (
                <LinkContainer to={page.path}>
                    <Nav.Link>{page.name}</Nav.Link>
                </LinkContainer>
            )
        })
    }

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

                        {/* Collection Pages */}
                        {renderCollectionPages()}

                        <LinkContainer to="/contacts">
                            <Nav.Link>Contacts</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

