import React from "react";
import Rater from '../Rater/Rater'
import './DisplayItem.css';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const DisplayPopularCompanies = ({companyList, startingNumber, endingNumber}) => {
    
    const companyArr = companyList.map((name,i) => {
        if(i>= startingNumber && i<endingNumber){
            return(
                <Col className="item"> 
                    <Row>
                        <Col sm={4}>
                            <div className="img">
                                <Image className="popularImage" src={companyList[i].companyURL} rounded />                                
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Card bg="#faf5c5" border="light">
                                <Card.Body>
                                    <Card.Title>{companyList[i].companyName}</Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        <Rater size={13} />
                                    </Card.Subtitle>                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> 
                </Col>                
            )
        }
    })        

    return(      
        <Container>
            <Row>
                {companyArr}    
            </Row>
        </Container>  
        
    );
};

export default DisplayPopularCompanies;