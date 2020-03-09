import React from 'react';
import './CareerTipsCard.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CareerTipsCards = (props) => {

// <div className="careertipsCards tc black dib br3 grow bw2 shadow-5">
//             <Link className="link"
//             to={{
//                 pathname: `/careerTips/${props.url}`,
//                 state: { props }
//             }}>
                
//                     <img className="careertips_img" src={props.thumbnail} alt="Thumbnail" />
//                     <div>
//                         <h1>{props.title}</h1> 
//                         <p className="subtitle">{props.title}</p>
//                         <h4 className="tc">by</h4>                    
//                         <p>{props.author}</p>      
//                     </div>                
//             </Link>            
//         </div>
    return (
        
        <div className="careerTipsDiv">
            <Link className="link"
                    to={{
                        pathname: `/careerTips/${props.url}`,
                        state: { props }
                    }}>
                <Card border="dark" className="careerTipsCard">
                    <Card.Img variant="top" src={props.thumbnail} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.subtitle}
                        </Card.Text>
                        <p>{props.author}</p>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card> 
            </Link>     
        </div>
    );    
}

export default CareerTipsCards;