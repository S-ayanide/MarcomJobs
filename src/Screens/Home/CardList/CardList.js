import React from 'react';
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { IoIosArrowDropdown } from 'react-icons/io'
import Markdown from 'react-markdown'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './CardList.css'


const CardList = (props) => {  
    console.log(props)  
    
    return(
        <Row>
            <Accordion className="jobCardBody" defaultActiveKey={0}>
                <Accordion.Toggle as={Row} eventKey={props.jobs}>
                    <Col className="jobBody">
                        <Row>
                            <Col>
                                <div className="companyImageDiv">
                                    <img src={props.companyImage} className="companyImage" />
                                </div>
                            </Col>                                                                
                            <Col xs={7}>
                                <Card border="light">
                                    <Card.Body>
                                        <Card.Title>{props.companyName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-secondary">
                                            {props.role}
                                        </Card.Subtitle>
                                        <Card.Subtitle className="mb-2 text-muted font-weight-light small">
                                            {props.location}
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col style={{marginTop: "4%"}} className="text-center">
                                <IoIosArrowDropdown size={25}/>
                            </Col> 
                        </Row> 
                    </Col>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.jobs}>
                    <Card border="light" className="jobCollapse">
                        <Card.Body>
                            <Container>
                                <article className="media">   
                                    <Row>
                                        <Col sm={2}>
                                            <Row>
                                                <div className="company_image_div">
                                                    <img className="company_image" src={props.companyImage} alt="alternate"/>
                                                </div> 
                                            </Row>                                            
                                        </Col>
                                        <Col sm={10}>
                                            <div className="media-content">
                                                <div className="content">                        
                                                    <div className="content_shape">
                                                        <h1 className="content_title">{props.companyName}</h1>                            
                                                        <p className="content_subtitle">{props.role}</p>                              
                                                        <br></br>
                                                        <hr></hr>    
                                                        <div className="apply_now">
                                                            <a target="_blank" href={props.jobUrl}><Button className="apply_button" size="lg" variant="warning">Apply Now</Button></a>
                                                            <p className="job_location"><strong>Location: </strong>{props.location}</p>
                                                        </div>                                              
                                                        <Markdown className="content_job" source={props.content} />
                                                    </div>
                                                    <div className="job_date">
                                                        <p className="job_posting">            
                                                            {moment(props.date).calendar(null, {
                                                            sameDay: '[Today]',
                                                            lastDay: '[Yesterday]',
                                                            lastWeek: '[Last] dddd',
                                                            sameElse: 'MMM Do YYYY'
                                                            })}
                                                        </p>
                                                        <Link className="report_job" to='/ReportJob'>
                                                            <p>Report a problem!</p>
                                                        </Link>
                                                    </div>
                                                </div>     
                                            </div>
                                        </Col>
                                    </Row>               
                                </article>
                            </Container>
                        </Card.Body>                            
                    </Card>
                </Accordion.Collapse>                
            </Accordion>
        </Row>
    );
}

export default CardList;