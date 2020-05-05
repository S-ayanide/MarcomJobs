import React, { useState, useEffect} from 'react';
import moment from 'moment'
import * as Markdown from 'react-markdown'
import './JobPost.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShareJob from '../ShareJob/ShareJob';
import Social from '../../../Components/Social/Social'

const JobPost = (props) => { 
    
    console.log(props.location.state)
    
    if(props.location.state === undefined){
        const param = props.match.params.jobsPost
        console.log("EMPTY")
        return (
            <div>
                <ShareJob param = {param} />
            </div>
        );
    }

    return (        
        <Container>
            <article className="media">   
                <Row>
                    <Col sm={2}>
                        <Row>
                            <div className="company_image_div">
                                <img className="company_image" src={props.location.state.props.companyImage} alt="alternate"/>
                            </div> 
                        </Row>
                        <Row>
                            <div className="shareJobs-div">
                                <Social currentUrl = {window.location.href}/>
                            </div>
                        </Row>
                    </Col>
                    <Col sm={10}>
                        <div className="media-content">
                            <div className="content">                        
                                <div className="content_shape">
                                    <h1 className="content_title">{props.location.state.props.companyName}</h1>                            
                                    <p className="content_subtitle">{props.location.state.props.role}</p>                              
                                    <br></br>
                                    <hr></hr>    
                                    <div className="apply_now">
                                        <a target="_blank" href={props.location.state.props.jobUrl}><Button className="apply_button" size="lg" variant="warning">Apply Now</Button></a>
                                        <p className="job_location"><strong>Location: </strong>{props.location.state.props.location}</p>
                                    </div>                                              
                                    <Markdown className="content_job" source={props.location.state.props.content} />
                                </div>
                                <div className="job_date">
                                    <p className="job_posting">            
                                        {moment(props.location.state.props.date).calendar(null, {
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
    )    
}

export default JobPost;