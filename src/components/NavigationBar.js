import React, { useState } from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../css/NavigationBar.css';

const NavigationBar = () => {
    const [user, setUser] = useState({id: "3", name: "Daniel Louis", manager: true});
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home" id="brand">Taskgate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#dashboard">
                        <i className="fas fa-border-all" id="icon-navbar"></i>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link href="#task">
                        <i className="far fa-edit" id="icon-navbar"></i>
                        Tasks
                    </Nav.Link>
                    </Nav>
                    <Nav>
                    {renderManagerMenu(user.manager)}
                    <Nav.Link href="#user">
                        <i className="far fa-user-circle" id="icon-navbar"></i>
                        {user.name}
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

const renderManagerMenu = (manager) => {
    const isManager = manager;
    if(isManager){
        return(
            <div>
                <Nav.Link href="#members">
                    <i className="fas fa-users" id="icon-navbar"></i>
                    Members
                </Nav.Link>
            </div>
        );
    }
}

export default NavigationBar;