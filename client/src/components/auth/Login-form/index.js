import React, { Component } from 'react'
import AuthService from '../../../service/AuthService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'



class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''

        }

        this.authService = new AuthService()
    }

    handleModal = status => this.setState({ showModal: status })

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/vinyls')
                this.props.handleModal(false)
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <>

                <Container as='main'>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
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

                                    <Button className='navbar-color btn-block' type='submit' >Log In</Button>
                                    <br></br>

                                <div className='register'>You are a new Customer? <Link to='/signup' className='register-link' handleModal={this.handleModal}>Register now</Link></div>

                                </Form>
                        </Col>


                    </Row>

                </Container>
            </>
        )
    }
}

export default LoginForm