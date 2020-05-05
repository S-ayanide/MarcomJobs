import React from 'react';
import './Cards.css';
import '../../Screens/Home/Home.css'

const Cards = (props) => {       
   
    return (         
        <div className="card">    
            <div className="img">
                <img className="cardImg" src={props.companyImage} alt="Robo"/>  
            </div>        
            <div className="cardDetails">
                <a href={props.companyUrl}>
                    <h6>{props.name}</h6>
                </a>
                <p className="role">{props.role}</p>   
                <p className="location">{props.location}</p>         
            </div>
        </div>        
    );
}

export default Cards;