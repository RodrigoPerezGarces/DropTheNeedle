import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './indexPage.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import CarouselIndex from './carousel'
import Footer from '../../ui/footer'


const IndexPage = () => {

    return (
        <>
            
            <body className='teaser'>
            <CarouselIndex />
            </body>

            <Footer />

           
        </>
    )
}

export default IndexPage