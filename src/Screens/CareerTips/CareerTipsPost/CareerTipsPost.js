import React from 'react'
import moment from 'moment'
import Social from '../../../Components/Social/Social'
import * as Markdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../CareerTipsItem.css';
import ShareCareerTipsPost from '../ShareCareerTipsPost/ShareCareerTipsPost'

const CareerTipsPost = (props) => {    

    console.log(props.location.state)
    
    if(props.location.state === undefined){
        const param = props.match.params.careerTipsPost
        console.log("EMPTY")        
        return (
            <div>
                <ShareCareerTipsPost param = {param} />
            </div>
        );
    }

    return (
        <Container>
            <div className="box">
                <article className="media">            
                    <div className="media-content">
                        <div className="content">                            
                            <img className="content_img" src={props.location.state.props.thumbnail}></img>
                            <div className="content_shape">
                                <h1 className="content_title">{props.location.state.props.title}</h1>
                                <p className="content_subtitle">{props.location.state.props.subtitle}</p>
                                    <Row>
                                        <Col>
                                            <div className="author_section">
                                                <div className="author_img_block">
                                                    <img className="author_img" src={props.location.state.props.authorImage} alt="Author" />
                                                </div>
                                                <div className="level">
                                                    <div className="content_author">
                                                        <p className="author">{props.location.state.props.author}</p>
                                                    </div>
                                                    <div className="level-right">
                                                        <p className="level-item">            
                                                            {moment(props.location.state.props.date).calendar(null, {
                                                            sameDay: '[Today]',
                                                            lastDay: '[Yesterday]',
                                                            lastWeek: '[Last] dddd',
                                                            sameElse: 'MMM Do YYYY'
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col></Col>
                                        <Col>
                                            <div className="social-buttons">
                                                <Social currentUrl = {window.location.href}/>
                                            </div>
                                        </Col>                                
                                    </Row>
                                <Markdown className="content_source" source={props.location.state.props.content} />                            
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Container>
    )
}

export default CareerTipsPost