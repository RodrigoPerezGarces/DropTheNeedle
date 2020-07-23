import React, {Component} from 'react'
import VinylService from '../../../service/VinylService'
import VinylCard from './Vinyl-card'
import VinylForm from './../vinyl-form'

import './Vinyl-list.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class VinylList extends Component {
    constructor() {
        super()
        this.state = {
            vinyls: undefined,
            showModal: false
        }
        this.vinylService = new VinylService()
        // this.searchTitle = this.searchTitle.bind(this)
    }

    componentDidMount = () => this.updateVinylList()
    
    updateVinylList = () => {
        this.vinylService
            .getAllVinyls()
            .then(response => this.setState({ vinyls: response.data }))
            .catch(err => console.log(err))
    }
    // searchTitle() {
    //     this.vinylService
    //         .findByTitle(this.state.vinyls.Title)
    //         .then(response => this.setState({ vinyls: response.data }))
    //         .catch(err => console.log(err))
    // }
   

    handleModal = status => this.setState({ showModal: status })

    handleVinylSubmit = () => {
        this.handleModal(false)
        this.updateVinylList()
    }



    render () {
        return (
            <>
            <Container as='main' className='vinyls-page'>
                <h1> For Sale </h1> 

                <Button onClick={() => this.handleModal(true)} variant='warning' size="sm" className='btn-add'>Add Vinyl</Button>
                

                {
                    !this.state.vinyls ? <h3>CARGANDO</h3> :
                        
                        <Row>
                            {this.state.vinyls.map(elm => <VinylCard key={elm._id} {...elm} />)}
                        </Row>
                }
                    <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>       
                        
                        <Modal.Body className='btn-modal-add'>
                            <VinylForm closeModal={() => this.handleModal(false)} handleVinylSubmit={this.handleVinylSubmit}/>
                        </Modal.Body>

                    </Modal>

            </Container>
                
            </>
        )
    }
}

export default VinylList