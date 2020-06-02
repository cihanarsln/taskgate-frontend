import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar} from "react-bootstrap";
import '../css/NavigationBar.css';

const NavigationBar = () => {
    const [user, setUser] = useState({id: "3", name: "Daniel Louis", manager: true});
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <Link id="brand" to="/">
                        Taskgate
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>
                        <Link className="link" to="/">
                            <i className="fas fa-border-all" id="icon-navbar"></i>
                            Dashboard
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="link" to="/tasks">
                            <i className="far fa-clone" id="icon-navbar"></i>
                            Tasks
                        </Link>
                    </Nav.Link>
                    </Nav>
                    <Nav>
                    {renderManagerMenu(user.manager)}
                    <Nav.Link>
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
                <Nav.Link>
                    <Link className="link" to="/members">
                        <i className="fas fa-users" id="icon-navbar"></i>
                        Members
                    </Link>
                </Nav.Link>
            </div>
        );
    }
}

export default NavigationBar;