import React from 'react';
import './CareerTipsCard.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

const CareerTipsCards = (props) => {

// <div className="careertipsCards tc black dib br3 grow bw2 shadow-5">
//             <Link className="link"
//             to={{
//                 pathname: `/careerTips/${props.url}`,
//                 state: { props }
//             }}>
                
//                     <img className="careertips_img" src={props.thumbnail} alt="Thumbnail" />
//                     <div>
//                         <h1>{props.title}</h1> 
//                         <p className="subtitle">{props.title}</p>
//                         <h4 className="tc">by</h4>                    
//                         <p>{props.author}</p>      
//                     </div>                
//             </Link>            
//         </div>

    if(props.values % 2 == 0){
        // For even cases -> Display Card on Left and short description on Right
        return (
            <div className="careerTipsDiv">
                <div>
                    <Link className="link"
                            to={{
                                pathname: `/careerTips/${props.url}`,
                                state: { props }
                            }}>
                        <Card border="light" className="careerTipsCard">
                            <Card.Img className="infoImage" variant="top" src={props.thumbnail} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text className="careerSubtitle">
                                    {props.subtitle}
                                </Card.Text>
                                <br></br>
                                <Button block="true" variant="dark">Read More</Button>
                            </Card.Body>
                        </Card> 
                    </Link> 
                </div>
                
                <div className="careerTipsInfoRight">
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
                        <Card border="light" className="careerTipsCard">
                            <Card.Img className="infoImage" variant="top" src={props.thumbnail} />
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text className="careerSubtitle">
                                    {props.subtitle}
                                </Card.Text>
                                <br></br>
                                <Button block="true" variant="dark">Read More</Button>
                            </Card.Body>
                        </Card> 
                    </Link> 
                </div>
                
                
            </div>
        );
    }

    return <div></div>              
}

export default CareerTipsCards;