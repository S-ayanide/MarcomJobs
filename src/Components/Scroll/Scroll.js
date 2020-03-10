import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className="child" style={{height: `${props.height}px`}}>                        
            {props.children}                        
        </div>
    );
}

export default Scroll;