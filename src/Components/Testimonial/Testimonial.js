import React from 'react'
import Rater from '../../Components/Rater/Rater'
import './Testimonial.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { IoIosArrowDropdown } from 'react-icons/io'

const Testimonial = ({testimonials}) => {    

    const testimonialArr = testimonials.map((name,i) => {        
        return(
            <Row>
            <Col className="testimonialItem"> 
                <Row>
                    <Col sm={2}>
                        <div className="img">
                            <Image className="popularImage" src={testimonials[i].userCompanyImage} rounded />                                
                        </div>
                    </Col>
                    <Col sm={1}>
                        <Image className="userImage" src="https://www.linuxtrainingacademy.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" roundedCircle />
                    </Col>
                    <Col sm={3}>
                        <div className="userInfo">
                            <p>{testimonials[i].username}</p>
                            <p>{testimonials[i].userCompany}</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Card className="testimonialCard" border="light">
                            <Card.Body>
                                <Card.Title>{testimonials[i].userCompany}</Card.Title>
                                <Card.Subtitle className="mb-2">
                                    <Rater />
                                </Card.Subtitle>                                    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <IoIosArrowDropdown className="testimonialDropdown" size={25}/>
                    </Col> 
                </Row> 
            </Col>                
            </Row>
        )}
    )        

    return(      
        <Container>
            
                {testimonialArr}    
            
        </Container>  
        
    );
}

export default Testimonial