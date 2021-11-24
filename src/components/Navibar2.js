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
const Navibar2 = () => (
  <Navbar collapseOnSelect expand="lg" variant="dark" id="header">
    <Container>
      <Navbar.Brand className="logo pb-2">LNUbiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {params.map(({ to, name }) => (
            <Nav className="pb-2">
              <Link to={to}> {name} </Link>
            </Nav>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Navibar2;
