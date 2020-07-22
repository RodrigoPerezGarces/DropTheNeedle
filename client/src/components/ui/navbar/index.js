import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
const navigation = () => {

    return (
        <Navbar bg="warning" variant="light" sticky='top'>
            <Navbar.Brand>
                <Link to="/">DTN_</Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/vinyls">Catalogue</Link>
                <Link to="/vinyls">For Sale</Link>
                <Link to="#pricing">Pricing</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )

}

export default navigation