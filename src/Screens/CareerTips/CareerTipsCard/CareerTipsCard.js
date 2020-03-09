import React from 'react';
import './CareerTipsCard.css';
import { Link } from 'react-router-dom'

const CareerTipsCards = (props) => {    

    return (
        <div className="newsCards tc black dib br3 grow bw2 shadow-5">
            <Link className="link"
            to={{
                pathname: `/careerTips/${props.url}`,
                state: { props }
            }}>
                
                    <img className="news_img" src={props.thumbnail} alt="Thumbnail" />
                    <div>
                        <h1>{props.title}</h1> 
                        <p className="subtitle">{props.title}</p>
                        <h4 className="tc">by</h4>                    
                        <p>{props.author}</p>      
                    </div>                
            </Link>            
        </div>
    );    
}

export default CareerTipsCards;