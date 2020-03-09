import React from 'react';
import "../NavItems/NavItems.css";

class LoginNav extends React.Component{

    render(){
        return(
            <div className='toolbar_navigation_items'>
                <ul>
                    <li><a href="/login">Login</a></li>                    
                </ul>
            </div>
        );
    }
}

export default LoginNav;