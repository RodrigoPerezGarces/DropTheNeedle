import React, { Component } from 'react'
import AuthService from '../../../service/AuthService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SigUpForm from '../Signup-form'
import SignupForm from '../Signup-form'
import { Link } from 'react-router-dom'



class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            showModal: false
        }

        this.authService = new AuthService()

        console.log(this.props)
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(theLoggedInUser => this.props.history.push('/vinyls'))
            .catch(err => console.log(err.response.data.message))
    }

    handleModal = status => this.setState({ showModal: status })


    render() {
        return (
            <>

                <Container as='main'>
                    <Row>
                        <Col>
                            <h3> Log In </h3>
                            <hr></hr>
                            <Form onSubmit={this.handleFormSubmit}>

                                <Form.Group >
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.username} name='username' type='text' />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.password} name='password' type='password' />
                                    <Form.Text className='text-muted'> Must be min. of 3 characters </Form.Text>
                                </Form.Group>

                                <Button variant='warning btn-block' type='submit' >Log In</Button>
                                <br></br>

                                <div class='register'>You are a new Customer? <Link to='/signup' onClick={() => this.handleModal(false)} className='register-link'>Register now</Link>
                                 
                                </div>

                            </Form>
                        </Col>

                        
                    </Row>

                </Container>
            </>
        )
    }
}

export default LoginForm