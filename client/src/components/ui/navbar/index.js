import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import AuthService from '../../../service/AuthService'
import Modal from 'react-bootstrap/Modal'
import LoginForm from '../../auth/Login-form'


class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    
        this.authService = new AuthService
    }

    handleModal = status => this.setState({ showModal: status })

    handleUserSubmit = () => {
        this.handleModal(false)
    }
    
         render() {
             
             return (
                <>
                <Navbar bg="warning" variant="dark" sticky='top'>
                    <Navbar.Brand>
                        <NavLink to="/">DTN_</NavLink>
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                
                        <Nav.Link as='div'>
                            <NavLink to="/" exact activeStyle={{ color: 'white' }}>MAIN</NavLink>
                        </Nav.Link>

                        <Nav.Link as='div'>
                            <NavLink to="/vinyls" activeStyle={{ color: 'white' }}>CATALOGUE</NavLink>
                        </Nav.Link>
                        {/* <Button onClick={() => this.handleModal(true)} variant='warning' size="sm" className='btn-add'>Add Vinyl</Button> */}

                        <Nav.Link as='div'>
                            <Link onClick={() => this.handleModal(true)} activeStyle={{ color: 'white' }}>LOGIN</Link>
                        </Nav.Link>

                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>

                     </Navbar>
                     
                     <Modal size='md' show={this.state.showModal} onHide={() => this.handleModal(false)}>

                         <Modal.Body className='btn-modal-add'>
                             <LoginForm handleUserSubmit={this.handleUserSubmit} />
                         </Modal.Body>

                     </Modal>
                </>
            )
        }
}

export default Navigation
