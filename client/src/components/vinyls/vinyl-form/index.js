import React, { Component } from 'react'
import VinylService from '../../../service/VinylService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


class VinylForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vinylDetails: {
                title: '',
                image: '',
                artists: '',
                label: '',
                genre: [],
                price: Number,
                year: '',
                catNo: '',
                description: '',
                tracklist: '',
            }
        }
        this.vinylService = new VinylService()
    }

    componentDidMount = () => {
        this.props.edit_id &&
            this.vinylService.getoneVinyl(this.props.edit_id)
                .then(response => this.setState({ vinylDetails: response.data }))
                .catch(err => console.log(err))
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ vinylDetails: { ...this.state.vinylDetails, [name]: value } })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        if (this.props.edit_id) {
            this.vinylService
                .updateVinyl(this.props.edit_id, { ...this.state.vinylDetails })
                .then(() => this.props.editFinish())
                .catch(err => console.log(err))
        }
        else {
            this.vinylService
                .createVinyl(this.state.vinylDetails)
                .then(() => this.props.handleVinylSubmit())
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Col md={{ span: 10, offset: 1 }}>
                        <h3>{this.props.edit_id ? 'EDIT REALEASE' : 'ADD RELEASE'} </h3>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group >
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.title} name='title' type='text' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Image (URL)</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.image} name='image' type='text' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Artists</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.artists} name='artists' type='text' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Label</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.label} name='label' type='text' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Genre</Form.Label>
                                <Form.Control onChange={this.handleInputChange} name='genre' as="select">
                                    <option value="Electronic">Electronic</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Funk">Funk</option>
                                    <option value="Dance">Dance</option>
                                    <option value="House">House</option>
                                    <option value="Deep House">Deep House</option>
                                    <option value="Techno">Techno</option>
                                    <option value="Acid">Acid</option>
                                    <option value="BreakBeat">BreakBeat</option>
                                    <option value="Electro">Electro</option>
                                    <option value="Latin">Latin</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="African">African</option>
                                    <option value="Disco">Disco</option>
                                    <option value="Soul">Soul</option>
                                    <option value="Reggae">Reggae</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Experimental">Experimental</option>
                                    <option value="Ambient">Ambient</option>
                                    <option value="Pop">Pop</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Price</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.price} name='price' type='text' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Year</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.year} name='year' type='number' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Cat No</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.catNo} name='catNo' type='text' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.description} name='description' type='text' as="textarea" rows="3" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Tracklist</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.vinylDetails.tracklist} name='tracklist' type='text' as="textarea" rows="3" />
                            </Form.Group>

                            <Button className='btn-outline-info navbar-color-second' type='submit'>{this.props.edit_id ? 'UPDATE' : 'ADD'}</Button>

                        </Form>
                    </Col>
                </Container>
            </>
        )
    }
}

export default VinylForm
