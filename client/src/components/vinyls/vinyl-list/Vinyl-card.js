import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


const VinylCard = ({_id, title, artists, price, image}) => {
    return (
        <Col md={4}>
            <Card className='vinyl-card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {artists} ||| {price}
                    </Card.Text>
                    <Link to={`/vinyls/${_id}`} className='btn btn-outline-warning btn-block btn-sm'>See Details</Link>
                        
            </Card.Body>
            </Card>
        </Col>
    )
}

export default VinylCard