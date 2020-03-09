import React from 'react';
import './NavItems.css';

class NavItems extends React.Component{
    
    render(){
        return(
            <div className='toolbar_navigation_items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/careerTips">Career Tips</a></li>                    
                    <li><a href="/more">More</a></li>
                </ul>
            </div>
        );
    }
}

export default NavItems;