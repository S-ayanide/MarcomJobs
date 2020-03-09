import React from 'react';
import {Link} from 'react-router-dom'
import './Cards.css';

const Cards = (props) => {   

    return (
        <Link to={`/${props.id}`}>            
            <div className="card">    
                <div className="img">
                    <img className="cardImg" src={props.companyImage} alt="Robo"/>  
                </div>        
                <div className="cardDetails">
                    <a href={props.companyUrl}>
                        <h4>{props.name}</h4>
                    </a>
                    <p className="role">{props.role}</p>   
                    <p className="location">{props.location}</p>         
                </div>
            </div>
        </Link>
    );
}

export default Cards;