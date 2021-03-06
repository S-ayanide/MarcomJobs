import React from 'react';
import './CareerTipsCard.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const CareerTipsCards = (props) => {    

    if(props.values % 2 == 0){
        // For even cases -> Display Card on Left and short description on Right
        return (
            <div className="careerTipsDiv">
                <div>
                    <Link className="link"
                            to={{
                                pathname: `/careerTips/${props.path}`,
                                state: { props }
                            }}>
                        <Image src={props.thumbnail} rounded className="careerTipsThumbnail" />                        
                    </Link> 
                </div>
                
                <div className="careerTipsInfoRight">
                    <p className="infoHead">{props.title}</p>
                    <hr className="infoLine"></hr>
                    <Markdown className="infoContent" source={props.content.split(" ").splice(0,40).join(" ").concat('...')} />
                    <br></br>
                    <Link className="link"
                        to={{
                            pathname: `/careerTips/${props.path}`,
                            state: { props }
                        }}>
                        <ButtonToolbar>
                                <Button block="true" variant="dark">Read More</Button>                            
                        </ButtonToolbar>
                    </Link>
                </div>
            </div>
        );
    }else{
        // For odd cases -> Display Card on Right and short description on left
        return(
            <div className="careerTipsDivLeft">

                <div className="careerTipsInfoLeft">
                    <p className="infoHead">{props.title}</p>
                    <hr className="infoLine"></hr>
                    <Markdown className="infoContent" source={props.content.split(" ").splice(0,40).join(" ").concat('...')} />
                    <br></br>
                    <Link className="link"
                        to={{
                            pathname: `/careerTips/${props.url}`,
                            state: { props }
                        }}>
                        <ButtonToolbar>
                                <Button block="true" variant="dark">Read More</Button>                            
                        </ButtonToolbar>
                    </Link>
                </div>

                <div>
                    <Link className="link"
                        to={{
                            pathname: `/careerTips/${props.url}`,
                            state: { props }
                        }}>
                        <Image src={props.thumbnail} rounded className="careerTipsThumbnail" />
                    </Link> 
                </div>
                
                
            </div>
        );
    }

    return <div></div>              
}

export default CareerTipsCards;