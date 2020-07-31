import React, { Component } from 'react'
import AuthService from '../../../service/AuthService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.authService = new AuthService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.handleToast(true, 'You have been registered in at DTN')
                this.props.history.push('/vinyls')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>

                <Container as='main'>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h3> Sign Up </h3>
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

                                <Form.Group >
                                    <Form.Label>E-Mail</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.email} name='email' type='email' />
                                </Form.Group>

                                <Button className='navbar-color btn-block' type='submit'>Sign Up</Button>

                            </Form>
                        </Col>
                    </Row>

                </Container>
            </>
        )
    }
}

export default SignupForm