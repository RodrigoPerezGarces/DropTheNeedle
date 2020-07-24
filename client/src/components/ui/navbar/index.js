import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const navigation = () => {

    return (
        <Navbar bg="warning" variant="dark" sticky='top'>
            <Navbar.Brand>
                <NavLink to="/">DTN_</NavLink>
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as='div'>
                    <NavLink to="/" exact activeStyle={{ color: 'white' }}>Main</NavLink>
                </Nav.Link>
                <Nav.Link as='div'>
                    <NavLink to="/vinyls" activeStyle={{ color: 'white' }}>Catalogue</NavLink>
                </Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )

}

export default navigation