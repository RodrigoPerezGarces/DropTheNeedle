import React, { Component } from 'react'
import VinylService from './../../../service/VinylService'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class VinylDetail extends Component {
    constructor (){
        super ()
        this.state = {
            vinylDetails:{}
        }
    this.vinylService = new VinylService()
    }

    componentDidMount = () => {
        const id = this.props.match.params.vinyl_id

        this.vinylService
            .getoneVinyl(id)
            .then(response => this.setState({vinylDetails: response.data}))
            .catch(err => console.log(err))
    }

    render () {
        return (

            !this.state.vinylDetails ? <h3> CARGANDO </h3> :
                
            <Container as='Main'>
            
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
                        <Link to='' className='btn btn-outline-warning btn-block btn-md'>Add To Wishlist</Link> 
                    </Col>
                </Row>
                    <br></br>
                    <hr></hr>
                <Row>
                    <Col md={6}>
                        <h5>Details</h5>
                        <br></br>
                        <h6>Genre</h6>
                        <h8>{this.state.vinylDetails.genre}</h8>
                        <br></br><br></br>
                        <h6> Release Year</h6>
                        <h8>{this.state.vinylDetails.year}</h8>
                        <br></br><br></br>
                        <h6>Cat No</h6>
                        <h8>{this.state.vinylDetails.catNo}</h8>
                    </Col>
                    <Col md={6} className='product-info'>
                        <h5>Tracklist</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default VinylDetail