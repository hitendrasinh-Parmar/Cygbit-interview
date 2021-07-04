import React from 'react';
import {Route ,NavLink, Switch,Redirect} from 'react-router-dom';

import { Navbar,Nav } from 'react-bootstrap';

import './Navigation.css';
import UserList from './UserList';
import UserDetail from './UserDetail';
const Navigation = () => {
    return(
        <header className="header">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand  className="links" href="#">Users</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <NavLink className="links" to="/UserList">List</NavLink>
                <NavLink className="links" to="/UserDetail">Detail</NavLink> 
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
        
        <Switch>
        <Route path= '/' exact component = {UserList} />
        <Route path= '/UserList' exact component = {UserList} />
        <Route path= '/UserDetail' exact component = {UserDetail} />
        <Redirect to="/" />
        </Switch>
        </header>
    );
}


export default Navigation;