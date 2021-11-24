import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/style.css";
const params = [
  { to: "/", name: "Home" },
  {
    to: "/about",
    name: "About",
  },
  {
    to: "/contact",
    name: "Contact",
  },
];
const paramps2 = [
  { to: "/signin", name: "Sign in" },
  { to: "/signup", name: "Sign up" },
];
const Navibar = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" id="header">
    <Container>
      <Navbar.Brand className="logo pb-2">LNUbiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav className="me-auto">
            {params.map(({ to, name }) => (
              <Nav className="pb-2">
                <Link to={to}> {name} </Link>
              </Nav>
            ))}
          </Nav>
        </Nav>

        <Nav>
          <Nav className="me-auto">
            {paramps2.map(({ to, name }) => (
              <Nav className="pb-2">
                <Link to={to}> {name} </Link>
              </Nav>
            ))}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Navibar;
