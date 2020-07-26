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
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    
        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(() => alert('TO-DO falta redirigir '))
            .catch(err => console.log(err))

    }

    handleModal = status => this.setState({ showModal: status })

    handleFormSubmit = () => {
        this.handleModal(false)
    }
    
         render() {
             
             return (
                <>
                <Navbar bg="warning" variant="dark" expand='md' sticky='top' >
                    <Navbar.Brand>
                        <NavLink to="/">DTN_</NavLink>
                    </Navbar.Brand>
                         
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                             
                    <Nav className="ml-auto">
                
                        <Nav.Link as='div'>
                            <NavLink to="/" exact activeStyle={{ color: 'white' }}>MAIN</NavLink>
                        </Nav.Link>

                        <Nav.Link as='div'>
                            <NavLink to="/vinyls" activeStyle={{ color: 'white' }}>CATALOGUE</NavLink>
                        </Nav.Link>

                        <Nav.Link as='div'>
                            <span onClick={() => this.handleModal(true)} activeStyle={{ color: 'white' }}>LOGIN</span>
                             </Nav.Link>
                             
                        <Nav.Link as='div'>
                            <span onClick={this.logout} activeStyle={{ color: 'white' }}>LOGOUT</span>
                        </Nav.Link>
                                 
                        <Nav.Link as='div'>
                            <NavLink to="/profile" activeStyle={{ color: 'white' }}>MY ACCOUNT</NavLink>
                        </Nav.Link>

                    
                    </Nav>
                    
                    </Navbar.Collapse>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                             
                    
                     </Navbar>
                     
                     <Modal size='md' show={this.state.showModal} onHide={() => this.handleModal(false)}>

                         <Modal.Body className='btn-modal-add'>
                             <LoginForm handleFormSubmit={this.handleFormSubmit} />
                         </Modal.Body>

                     </Modal>
                </>
            )
        }
}

export default Navigation
