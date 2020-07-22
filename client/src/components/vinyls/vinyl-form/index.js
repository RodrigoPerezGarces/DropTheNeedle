import React, {Component} from 'react'
import VinylService from '../../../service/VinylService'

class VinylForm extends Component {
    constructor (){
        super ()
        this.state = {
            title: '',
            image: '',
            artists: '',
            label: '',
            genre: '',
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
            <Form>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Artists</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Label</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Cat No</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tracklist</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
            </Form>

            <form onSubmit={this.handleFormSubmit}>
                Title<input onChange={this.handleInputChange} value={this.state.title} name='title' type='text'/><br></br>
                Image<input onChange={this.handleInputChange} value={this.state.image} name='image' type='text'/><br></br>
                Artists<input onChange={this.handleInputChange} value={this.state.artists} name='artists' type='text'/><br></br>
                Label<input onChange={this.handleInputChange} value={this.state.label} name='label' type='text'/><br></br>
                Genre<input onChange={this.handleInputChange} value={this.state.genre} name='genre' type='text'/><br></br>
                Price<input onChange={this.handleInputChange} value={this.state.price} name='price' type='text'/><br></br>
                Year<input onChange={this.handleInputChange} value={this.state.year} name='year' type='number'/><br></br>
                catNo<input onChange={this.handleInputChange} value={this.state.catNo} name='catNo' type='text' /><br></br>
                Tracklist<input onChange={this.handleInputChange} value={this.state.tracklist} name='tracklist' type='text' /><br></br>
                <input type='submit' value='Enviar' />
            </form>
        )
    }
}

export default VinylForm