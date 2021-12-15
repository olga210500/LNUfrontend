import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/style.css";
import { connect } from "react-redux";
import Logout from "./Logout";

const params = [
  {
    to: "/",
    name: "Головна",
  },
  {
    to: "/about",
    name: "Про нас",
  },
  {
    to: "/contact",
    name: "Контакти",
  },
];
const paramps2 = [
  { to: "/signin", name: "Увійти" },
  { to: "/signup", name: "Зареєструватись" },
];
const loggedInParams=[
  {
    to:'/',
    name:'Головна'
  },

  {
    to: "/userPage",
    name:'Моя сторінка'
  },

  {
    to:'/allApplications',
    name:'Заявки'
  },

]

const Navibar = ({ userReducer }) => (
  <Navbar collapseOnSelect expand="lg" variant="dark" id="header">
    <Container>
      <Navbar.Brand className="logo pb-2">LNUbiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav className="me-auto">

          {!userReducer.loggedIn ? (
              params.map(({ to, name },i) => (
                <Nav key={i} className="pb-2">
                  <Link to={to}> {name} </Link>
                </Nav>
              ))
            ) : (
              loggedInParams.map(({ to, name },i) => (
                <Nav key={i} className="pb-2">
                  <Link to={to}> {name} </Link>
                </Nav>
              ))
            )}

          </Nav>
        </Nav>

        <Nav>
          <Nav className="me-auto">
            {!userReducer.loggedIn ? (
              paramps2.map(({ to, name },i) => (
                <Nav key={i} className="pb-2">
                  <Link to={to}> {name} </Link>
                </Nav>
              ))
            ) : (
              <Logout />
            )}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps)(Navibar);
