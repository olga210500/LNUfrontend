import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../styles/style.css'


export default function Navibar() {
    return (
        <Navbar collapseOnSelect expand='lg' variant="dark" id='header'>
        <Container>
        <Navbar.Brand className='logo'>LNUbiz</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav' >
        <Nav className="me-auto">
        <Nav.Link><Link to='/'> Home </Link></Nav.Link>
        <Nav.Link><Link to='/about'> About </Link></Nav.Link>
        <Nav.Link><Link to='/contact'> Contact </Link></Nav.Link>
        </Nav>
        <Nav >
         <Nav.Link><Link to='/signin'> Sign in </Link></Nav.Link>
         <Nav.Link><Link to='/signup'> Sign up </Link></Nav.Link>

       
      </Nav>
      </Navbar.Collapse>
        </Container>
      </Navbar>
            
        // <Navbar collapseOnSelect expand='md' variant='dark' bg='dark' >
        //     <Container>
        //         <Navbar.Brand>LNUbiz</Navbar.Brand>
        //         <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        //         <Navbar.Collapse id='responsive-navbar-nav' />
        //         <Nav className='me-auto'>
        //             <Nav.Link><Link to='/'> Home </Link></Nav.Link>
        //             <Nav.Link><Link to='/about'> About </Link></Nav.Link>
        //             <Nav.Link><Link to='/contact'> Contact </Link></Nav.Link>
        //         </Nav>
        //         <Nav >
        //         {/* <Link to='/signin'> Sign in </Link>
        //           <Link to='/signup'> Sign up</Link> */}
        //           <Button variant='primary'>
        //             Login
        //           </Button>
        //           <Button variant='primary'>
        //             Logup
        //           </Button>
        //         </Nav>
        //         </Container>
                
        // </Navbar>
       
    )
}
