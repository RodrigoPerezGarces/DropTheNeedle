import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const VinylCard = ({title, artists, label, price, image}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {artists}<br/>
                    {price }
                </Card.Text>
                <Button variant="outline-warning" size='sm' block>Go somewhere</Button>
                </Card.Body>
        </Card>
    )
}

export default VinylCard