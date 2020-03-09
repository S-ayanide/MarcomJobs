import React from "react";
import './DisplayItemOne.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Rater from "../Rater/Rater";

const DisplayPopularCompaniesTwo = ({companyList}) => {    

    const companyArr = companyList.map((name,i) => {
        if(i>=3 && i<6){
            return (
                <Col className="item"> 
                    <Row>
                        <Col sm={4}>
                            <div className="img">
                                <img className="popularImage" src={companyList[i].companyURL} alt="companyImage" />
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Card border="light">
                                <Card.Body>
                                    <Card.Title>{companyList[i].companyName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Rater size={13}/>
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

export default DisplayPopularCompaniesTwo;