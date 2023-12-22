import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { ICollection } from "../data/collections";
import { HelperCollections } from "../helpers/helperCollections";
import { useEffect, useState } from "react";

export function HeaderComponent() {

  const [collections, setCollections] = useState<ICollection[]>([]);
  const [outlets, setOutlets] = useState<ICollection[]>([]);

  useEffect(() => {
    setCollections(HelperCollections.GetCollectionsForMenu());
    setOutlets(HelperCollections.GetCollectionsForHeader());
  }, [])

  const renderCollectionMenuItem = () => {
    return (
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link} className="nav-link-custom">Collections</Dropdown.Toggle>
        <Dropdown.Menu>
          {
            collections.map((page, index) => {
              return (
                <LinkContainer key={page.id} to={page.path}>
                  <Dropdown.Item>{page.name_en}</Dropdown.Item>
                </LinkContainer>
              )
            })
          }
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  const renderOutletsMenusItems = () => {
    return outlets.map((page, index) => {
      return (
        <LinkContainer key={page.id} to={page.path}>
          <Nav.Link className="nav-link-custom">{page.name_en}</Nav.Link>
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
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>

            {/* Collection Pages */}
            {renderCollectionMenuItem()}

            {/* Outlet pages */}
            {renderOutletsMenusItems()}

            <LinkContainer to="/contacts">
              <Nav.Link className="nav-link-custom">Contacts</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

