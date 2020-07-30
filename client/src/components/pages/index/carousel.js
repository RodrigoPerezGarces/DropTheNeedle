import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import VinylService from '../../../service/VinylService'
import VinylCard from '../../vinyls/vinyl-pages/Vinyl-card'


class CarouselIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            vinyls: []
        }
        this.vinylService = new VinylService()
    }

    componentDidMount = () => {
        this.updateVinylList()

    }

    updateVinylList = () => {
        this.vinylService
            .getAllVinyls()
            .then(response => this.setState({ vinyls: response.data }))
            .catch(err => console.log(err))
    }

    render() {



        return (
            <Container className='fluid carousel-back'>
                <Carousel>

                    {this.state.vinyls.map(elm =>
                        <Carousel.Item>

                            <img className="carousel" src={elm.image}
                                alt={elm.title}
                            />

                            <Carousel.Caption>
                                <h3>{elm.title}</h3>
                                <p>{elm.artists}</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                    )}


                </Carousel>
            </Container>

        )
    }

}

export default CarouselIndex