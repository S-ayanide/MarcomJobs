import React from 'react';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Reddit from 'react-sharingbuttons/dist/buttons/Reddit'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Email from 'react-sharingbuttons/dist/buttons/Email'
import './Social.css'
import 'react-sharingbuttons/dist/main.css'

const Social = (props) => {
    console.log(props)
    const shareText = 'Check this site!'

    return (          
        <div>
            <Facebook url={props.currentUrl} />
            <Twitter url={props.currentUrl} shareText={shareText} />
            <Reddit url={props.currentUrl} />            
            <Email url={props.currentUrl} subject={shareText} />            
        </div>          
    )
}

export default Social;