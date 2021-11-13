import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import "../styles/style.css";

export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="header">
      <Container>
        <Navbar.Brand className="logo pb-2">LNUbiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav className="pb-2">
              <Link to="/"> Home </Link>
            </Nav>
            <Nav className="pb-2">
              <Link to="/about"> About </Link>
            </Nav>
            <Nav className="pb-2">
              <Link to="/contact"> Contact </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
