import * as contentful from 'contentful'

import React, { useEffect, useState } from 'react'

import * as Markdown from 'react-markdown'
import moment from 'moment'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Social from '../../../Components/Social/Social'
import Spinner from 'react-bootstrap/Spinner'

const ShareJob = (props) => {

    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_JOBS_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_JOBS_ACCESS_TOKEN
    })

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);    
  
    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true);
            const response = await client.getEntries();
            setJobs(response.items);
            setLoading(false); 
        }         
        
        fetchPosts();                        
    }, []); 
    
    console.log(jobs)
    console.log(props.param)
    const getJob = jobs.map(({fields},i) => {
        if(jobs.length > 0 || loading == false){
            if(props.param === fields.path){
                return (
                    <Container>
                        <article className="media">   
                            <Row>
                                <Col sm={2}>
                                    <Row>
                                        <div className="company_image_div">
                                            <img className="company_image" src={fields.companyImage} alt="alternate"/>
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
                                                <h1 className="content_title">{fields.companyName}</h1>                            
                                                <p className="content_subtitle">{fields.role}</p>                              
                                                <br></br>
                                                <hr></hr>    
                                                <div className="apply_now">
                                                    <Button className="apply_button" size="lg" variant="warning">Apply Now</Button>
                                                    <p className="job_location"><strong>Location: </strong>{fields.location}</p>
                                                </div>                                              
                                                <Markdown className="content_job" source={fields.content} />
                                            </div>
                                            <div className="job_date">
                                                <p className="job_posting">            
                                                    {moment(fields.date).calendar(null, {
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
            }else{
                console.log("Job not present")
            }
        }else{
            return (
                <div className="loadSpin">
                    <Spinner animation="border" variant="warning" />
                </div>
            );
        }
    })
    
    return(
        <div>
            {getJob}
        </div>
    );
};

export default ShareJob;