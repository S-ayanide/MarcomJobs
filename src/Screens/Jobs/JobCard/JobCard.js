import React from 'react'
import { Link } from 'react-router-dom'
import './JobCard.css'
import Card from 'react-bootstrap/Card'
import Markdown from 'react-markdown'

const JobCard = (props) => {

    if(props.values <= 15){
        return(
            <div className="jobPostDiv">
                <div className="jobPost">
                    <Link className="link"
                        to={{
                            pathname: `/jobs/${props.path}`,
                            state: { props }
                        }}>
                        <Card border="warning" className="jobPostCard">                        
                            <Card.Body>
                                <Card.Title>{props.role}</Card.Title>
                                <Card.Text>{props.companyName}</Card.Text>
                                <Card.Text>{props.location}</Card.Text>
                                <br></br>
                                <Markdown source={props.companyPoints} className="jobPoints" />                                 
                            </Card.Body>
                        </Card> 
                    </Link> 
                </div>                
            </div>
        );
    }

    return <div></div>
}

export default JobCard;