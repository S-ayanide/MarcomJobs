import React from 'react';
import "./Toolbar.css"
import logo from '../../assets/logo/transparent.png';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'

const Toolbar = () => {    
    
    return(
        <Navbar className="navbar" sticky="top">
            <Navbar.Brand href="/">
                <img src={logo} alt="brand" className="marcomjobs_logo" />
            </Navbar.Brand>
            <Nav 
                className="mr-auto">
                <Nav.Link className="navbar_nav" href="/">Home</Nav.Link>
                <Nav.Link className="navbar_nav" eventKey="/reviews" href="/reviews">Reviews</Nav.Link>
                <Nav.Link className="navbar_nav" eventKey="/about" href="/about">About</Nav.Link>
                <Nav.Link className="navbar_nav" href="/jobs">Jobs</Nav.Link>
                <Nav.Link className="navbar_nav" href="/careerTips">CareerTips</Nav.Link>
                <Nav.Link className="navbar_nav" href="/more">More</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default Toolbar;