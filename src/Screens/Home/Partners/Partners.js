import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './Partner.css'

const Partners = ({ images }) => {     

    return (        
        <Carousel controls={false} indicators={false} interval={2000} pause={'hover'}>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col className="text-center">
                            {   
                                images.map((img,i) => {
                                    if(i <= 3)
                                        return (
                                            <div className="partnerDiv">
                                                <img className="partnerImage" src={img} alt="companyImage" />    
                                            </div>
                                        );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    <Row>
                        <Col className="text-center">
                            {   
                                images.map((img,i) => {
                                    if(i > 3 && i <= 7)
                                        return (
                                            <div className="partnerDiv">
                                                <img className="partnerImage" src={img} alt="companyImage" />    
                                            </div>
                                        );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>                                         
        </Carousel>
    );
}

export default Partners;

