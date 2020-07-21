import React, { Component } from 'react'
import VinylService from './../../../service/VinylService'

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
            <>
                <h1> YAAAAY </h1>
            </>
        )
    }
}

export default VinylDetail