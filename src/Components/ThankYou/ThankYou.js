import React from 'react';
import thanks from './thankYou.png';
import './ThankYou.css';

const ThankYou = () => {
    return (
        <div className="thankYouBody">
            <div className="thankYouElements">
                <h1 className="thanksMessage">Thanks for Subscribing</h1>
                <img src={thanks} alt="thanks" className="thumbsUp" />
                <p>Let's grow together</p>
            </div>
        </div>
    );
}

export default ThankYou;