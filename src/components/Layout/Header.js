import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const Header = ({ currentUser }) => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser?._id ? (
              <div className="d-flex gap-2">
                <p>Welcome {currentUser?.fName}</p>
                <Link to="/">Logout</Link>
              </div>
            ) : (
              <>
                {" "}
                <Nav.Link href="/">
                  <i className="fa-solid fa-user"></i> Login
                </Nav.Link>
                <Nav.Link href="/register">
                  {" "}
                  <i className="fa-solid fa-pen-to-square"></i> Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
