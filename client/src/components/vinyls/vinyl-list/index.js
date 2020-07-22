import React, {Component} from 'react'
import VinylService from '../../../service/VinylService'
import VinylCard from './Vinyl-card'

import './Vinyl-list.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class VinylList extends Component {
    constructor (){
        super ()
        this.state = {
            vinyls: undefined
        }
        this.vinylService = new VinylService()
    }

    componentDidMount = () => {
        this.vinylService
            .getAllVinyls()
            .then(response => this.setState({vinyls: response.data}))
            .catch(err => console.log(err))
    }


    render () {
        return (
            
            <Container as='main' className='vinyls-page'>
                <h1> For Sale </h1> 
                {
                    !this.state.vinyls ? <h3>CARGANDO</h3> :
                        
                        <Row>
                            {this.state.vinyls.map(elm => <VinylCard key={elm._id} {...elm} />)}
                        </Row>
                }


            </Container>
            
        )
    }
}

export default VinylList