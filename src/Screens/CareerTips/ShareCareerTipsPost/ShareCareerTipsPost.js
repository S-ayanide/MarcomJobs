import * as contentful from 'contentful'

import React, { useEffect, useState } from 'react'

import * as Markdown from 'react-markdown'
import moment from 'moment'
import Social from '../../../Components/Social/Social'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

const ShareCareerTipsPost = (props) => {

    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_CAREERTIPS_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_CAREERTIPS_ACCESS_TOKEN
    })

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);    
  
    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true);
            const response = await client.getEntries();
            setPosts(response.items);
            setLoading(false); 
        }         
        
        fetchPosts();                        
    }, []); 
    
    console.log(posts)
    console.log(props.param)
    const getPost = posts.map(({fields},i) => {
        if(posts.length > 0 || loading == false){
            if(props.param === fields.path){
                return (
                    <Container>
                        <div className="box">
                            <article className="media">            
                                <div className="media-content">
                                    <div className="content">                            
                                        <img className="content_img" src={fields.thumbnail}></img>
                                        <div className="content_shape">
                                            <h1 className="content_title">{fields.title}</h1>
                                            <p className="content_subtitle">{fields.subtitle}</p>
                                                <Row>
                                                    <Col>
                                                        <div className="author_section">
                                                            <div className="author_img_block">
                                                                <img className="author_img" src={fields.authorImage} alt="Author" />
                                                            </div>
                                                            <div className="level">
                                                                <div className="content_author">
                                                                    <p className="author">{fields.author}</p>
                                                                </div>
                                                                <div className="level-right">
                                                                    <p className="level-item">            
                                                                        {moment(fields.date).calendar(null, {
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
                                            <Markdown className="content_source" source={fields.content} />                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </Container>
                )
            }else{
                console.log("Post not present")
            }
        }else{
            return (
                <div className="loadSpin">
                    <Spinner animation="border" variant="warning" />
                </div>
            );
        }
    })
    
    return(
        <div>
            {getPost}
        </div>
    );
};

export default ShareCareerTipsPost;