import "./Toolbar.css"

import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import {Link} from 'react-router-dom'
import React from 'react';
import logo from '../../assets/logo/marcomjobs_logo.png';
import app from "../../Config/firebaseConfig"

const Toolbar = () => {    

    let current = ""
    const signOut = () => {
        app.auth().signOut();
    }
        
    try{
        if(app.auth().currentUser.displayName !== null){        
            current = app.auth().currentUser.displayName.split(" ")[0];
        }
    }catch(err){
        current = ""
        console.log(err)
    }

    return(
        <Navbar className="navbar" sticky="top">
            <Navbar.Brand href="/">
                <img src={logo} alt="brand" className="marcomjobs_logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">                                                 
                    <Link to="/jobs" className="navbar_nav nav-link">Jobs</Link>
                    <Link to="/reviews" className="navbar_nav nav-link">Reviews</Link>
                    <Link to="/careerTips" className="navbar_nav nav-link">Career Tips</Link>                
                    <Link to="/about" className="navbar_nav nav-link">About Us</Link>
                </Nav>   
                <Form inline>     
                    {current === "" ? 
                    <NavDropdown title="Login " id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-items" href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-items" href="/signup">Sign Up</NavDropdown.Item>                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="dropdown-items" href="#action/3.4">Login with G</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-items" href="#action/3.4">Login with FB</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item 
                            className="dropdown-items" 
                            onClick = {signOut}>
                            Sign Out
                        </NavDropdown.Item>
                    </NavDropdown>
                    :
                    <NavDropdown title={`Hello ${current}`} id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-items" href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-items" href="/">Dashboard</NavDropdown.Item>                        
                        <NavDropdown.Divider />                        
                        <NavDropdown.Item 
                            className="dropdown-items" 
                            onClick = {signOut}>
                            Sign Out
                        </NavDropdown.Item>
                    </NavDropdown>
                    }                     
                    
                </Form>         
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Toolbar;