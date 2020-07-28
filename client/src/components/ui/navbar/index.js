import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { NavLink } from 'react-router-dom'
import AuthService from '../../../service/AuthService'
import Modal from 'react-bootstrap/Modal'
import LoginForm from '../../auth/Login-form'
import Icon from '../logo/cart-logo'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'


class Navigation extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

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
            .then(() => {
                this.props.setTheUser(false)

            })
            .catch(err => console.log(err))

    }

    handleModal = status => this.setState({ showModal: status })



    render() {

        return (
            <>
                <Navbar className='navbar-color' variant="dark" expand='md' >
                    <Navbar.Brand>
                        <NavLink to="/">DTN_</NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">

                            <Nav.Link as='div'>
                                <NavLink to="/" exact activestyle={{ color: 'white' }}>MAIN</NavLink>
                            </Nav.Link>

                            <Nav.Link as='div'>
                                <NavLink to="/vinyls" activestyle={{ color: 'white' }}>CATALOGUE</NavLink>
                            </Nav.Link>

                            {this.props.loggedInUser ?
                                (
                                    <>
                                        <Nav.Link as='div'>
                                            <NavLink to="/profile" activestyle={{ color: 'white' }}>MY ACCOUNT</NavLink>
                                        </Nav.Link>

                                        <Nav.Link as='div'>
                                            <span onClick={this.logout} activestyle={{ color: 'white' }}>LOGOUT</span>
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <Nav.Link as='div'>
                                        <span ref={this.myRef} onClick={() => this.handleModal(true)} activestyle={{ color: 'white' }}>LOGIN</span>
                                    </Nav.Link>
                                )}
                            {this.props.loggedInUser && this.props.loggedInUser.role === "ADMIN" ?
                                (
                                    <Nav.Link as="span">
                                        <NavLink to="/add">Crear producto</NavLink>
                                    </Nav.Link>
                                ) : null}





                            <Nav.Link as='div'>
                                <NavLink to="/profile" activestyle={{ color: 'white' }}>Hi, {this.props.loggedInUser ? this.props.loggedInUser.username : 'Guest'} </NavLink>
                            </Nav.Link>






                        </Nav>

                    </Navbar.Collapse>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />


                        <div>

                            <button className='snipcart-checkout'>
                                <Icon className='cart-logo' />
                            </button>

                            <span className="snipcart-total-price"> €0.00</span>
                            (<span className='snipcart-items-count'>0</span>)



                             </div>



                    </Form>


                </Navbar>

                <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>

                    <Modal.Body className='btn-modal-add'>
                        <LoginForm setTheUser={this.props.setTheUser} history={this.props.history} handleModal={this.handleModal} />
                    </Modal.Body>

                </Modal>
            </>
        )
    }
}

export default withRouter(Navigation)
