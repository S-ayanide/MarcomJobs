import React from 'react';

const LeftScroll = (props) => {
    return (
        <div style={{overflowY: "scroll",
            height: "400px",
            border: "0px solid black",  
            marginLeft: "1%",
            width: "35%",    
            boxShadow: "3px 10px 3px rgb(228, 228, 228)",
            background: "#fffcf5"}}>                        
            {props.children}                        
        </div>
    );
}

export default LeftScroll;