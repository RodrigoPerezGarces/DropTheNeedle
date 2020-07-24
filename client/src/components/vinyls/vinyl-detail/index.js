import React, { Component } from 'react'
import VinylService from '../../../service/VinylService'
import VinylForm from './../vinyl-form'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


class VinylDetail extends Component {
    constructor (props){
        super (props)
        this.state = {
            vinylDetails: {},
            edit_id: undefined,
            showModal: false
        }
        this.vinylService = new VinylService()
    }

    componentDidMount = () => {
        const id = this.props.match.params.vinyl_id


        this.vinylService
            .getoneVinyl(id)
            .then(response => this.setState({ vinylDetails: response.data }))
            .catch(err => console.log(err))
    }

    updateVinylList = () => {
        this.vinylService
            .getAllVinyls()
            .then(response => this.setState({ vinyls: response.data }))
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })


    editVinyl = id => {
        this.setState({ edit_id: id }, () => this.handleModal(true))
    }

    editFinish = () => {

        this.vinylService
            .getOneVinyl()
            .then(() => this.setState({ edit_id: undefined}))
    }

    handleModal = status => this.setState({ showModal: status })

   

    handleDeleteVinyl = e => {
        const id = this.props.match.params.vinyl_id

        e.preventDefault()
        this.vinylService
            .deleteVinyl(id)
            // .then(() => this.handleDeleteVinyl())
            .then(() => this.props.updateVinylList())
            .catch(err => console.log(err))
    }

    handleVinylSubmit = () => {
        this.handleModal(false)
        this.updateVinylList()
    }


    render () {
        return (

            !this.state.vinylDetails ? <h3> CARGANDO </h3> :
                
            <Container as='main'>
            
                <Row>
                    <Col md={12} className='vinyl-detail-back'>
                        <Link to='/vinyls'>Back</Link> 
                    </Col>    
                </Row>
                <Row>
                    <Col md={6}>
                        <img src={this.state.vinylDetails.image} alt={this.state.vinylDetails.title} />
                    </Col>    
                    <Col md={6} className='product-info'>
                        <h1><b>{this.state.vinylDetails.artists}</b></h1>
                        <h3>{this.state.vinylDetails.title}</h3>
                        <h5>{this.state.vinylDetails.label}</h5>
                        <br></br><br></br>
                        <h2>{this.state.vinylDetails.price}</h2>
                        <br></br><br></br>
                        <Link to='' className='btn btn-outline-warning btn-block btn-md'>Add To Cart</Link> 
                        <br></br>
                        <Link to='' className='btn btn-outline-warning btn-block btn-md'>Add To Wishlist</Link>
                       

                    </Col>
                </Row>
                    <br></br>
                    <hr></hr>
                <Row>
                    <Col md={6}>
                        <h5><b>Details</b></h5>
                        <br></br>
                        <h6><b>Genre</b></h6>
                        <p>{this.state.vinylDetails.genre}</p>
                        <br></br>
                        <h6><b>Release Year</b></h6>
                        <p>{this.state.vinylDetails.year}</p>
                        <br></br>
                        <h6><b>Cat No</b></h6>
                        <p>{this.state.vinylDetails.catNo}</p>
                            <Button onClick={() => this.editVinyl(this.state.vinylDetails.id)} className='btn btn-outline-warning btn-block btn-md'>EDIT</Button>     
                            <Link to='/vinyls' onClick={this.handleDeleteVinyl} handleVinylSubmit={this.handleVinylSubmit} className='btn btn-outline-warning btn-block btn-md'>Eliminate</Link>     
                            
                            <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>

                                <Modal.Body className='btn-modal-add'>
                                    <VinylForm edit_id={this.state.edit_id} handleVinylSubmit={this.handleVinylSubmit} finishEdit={this.editFinish} closeModal={() => this.handleModal(false)}  />
                                </Modal.Body>

                            </Modal>
                            
                    </Col>
                    <Col md={6} className='product-info'>
                            <h5><b>Tracklist</b></h5>
                            <p>{this.state.vinylDetails.tracklist}</p>
                    </Col>
                    </Row>
                    
                    
            </Container>
        )
    }
}

export default VinylDetail