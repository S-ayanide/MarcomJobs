import React from 'react';
import "./SideDrawer.css";

const SideDrawer = props => {

    let drawerClasses = 'side_drawer';
    if(props.show){
        drawerClasses = 'side_drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/jobs"><li>Jobs</li></a>
                <a href="/review"><li>Review</li></a>
                <a href="/careerTips"><li>Career Tips</li></a>                
                <a href="/more"><li>More</li></a>                
            </ul>
        </nav>
    );
};

export default SideDrawer;