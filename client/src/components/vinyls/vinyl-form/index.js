import React, {Component} from 'react'
import VinylService from '../../../service/VinylService'
import Form from 'react-bootstrap/Form'
//import Container from 'react-bootstrap/Container'


class VinylForm extends Component {
    constructor (){
        super ()
        this.state = {
            title: '',
            image: '',
            artists: '',
            label: '',
            genre: [],
            price: '',
            year: '',
            catNo: '',
            tracklist: '',
        }
        this.vinylService = new VinylService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.vinylService
            .createVinyl(this.state)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    render () {     // FORM CONTROL el segundo en FORMS/REACT-BOOTSTRAP
        return (
           
            <Form onSubmit={this.handleFormSubmit}>
                
                <Form.Group >
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.title} name='title' type='text' />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.image} name='image' type='text' />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Artists</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.artists} name='artists' type='text' />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Label</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.label} name='label' type='text' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Genre</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.genre} name='genre' as="select">
                        <option>Electronic</option>
                        <option>Jazz</option>
                        <option>Funk</option>
                        <option>Dance</option>
                        <option>House</option>
                        <option>Deep House</option>
                        <option>Techno</option>
                        <option>Acid</option>
                        <option>BreakBeat</option>
                        <option>Electro</option>
                        <option>Latin</option>
                        <option>Brasil</option>
                        <option>African</option>
                        <option>Disco</option>
                        <option>Soul</option>
                        <option>Reggae</option>
                        <option>Rock</option>
                        <option>Experimental</option>
                        <option>Ambient</option>
                        <option>Pop</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.price} name='price' type='text' />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Year</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.year} name='year' type='number' />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Cat No</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.catNo} name='catNo' type='text' />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Tracklist</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.tracklist} name='tracklist' type='text' as="textarea" rows="3" />
                </Form.Group>

                <input type='submit' value='Enviar' />

                </Form>
        )
    }
}

export default VinylForm