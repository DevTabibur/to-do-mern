import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import './HeaderNav.css';

const HeaderNav = () => {
  const [user] = useAuthState(auth);

  

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">ToDo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/add-task">Add Task</Nav.Link>
              {user ? (
                <button
                  className="sign-out-btn"
                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              ) : (
                <Nav.Link className="header-link" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
