import React from 'react'
import { Link } from 'react-router-dom'
import './JobCard.css'
import Card from 'react-bootstrap/Card'
import Markdown from 'react-markdown'

const JobCard = (props) => {

    if(props.values <= 15){
        return(
            <div>
                <div>
                    <Link className="link"
                        to={{
                            pathname: `/Jobs/${props.path}`,
                            state: { props }
                        }}>
                        <Card border="light">                        
                            <Card.Body>
                                <Card.Title>{props.role}</Card.Title>
                                <Card.Text>{props.companyName}</Card.Text>
                                <Card.Text>{props.location}</Card.Text>
                                <br></br>
                                <Markdown source={props.points} /> 
                            </Card.Body>
                        </Card> 
                    </Link> 
                </div>                
            </div>
        );
    }

    return(
        <div></div>
    );
}

export default JobCard;