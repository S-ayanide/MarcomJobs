import React from 'react'
import moment from 'moment'
import * as Markdown from 'react-markdown'
import '../CareerTipsItem.css';

const CareerTipsPost = ({ location: { state: { props } }}) => {  
    return (
        <div className="box">
            <article className="media">            
                <div className="media-content">
                    <div className="content">
                        <img className="content_img" src={props.thumbnail}></img>
                        <div className="content_shape">
                            <h1 className="content_title">{props.title}</h1>
                            <p className="content_subtitle">{props.subtitle}</p>
                            <div className="author_section">
                                <div className="author_img_block">
                                    <img className="author_img" src={props.authorImage} alt="Author" />
                                </div>
                                <div className="level">
                                    <div className="content_author">
                                        <p className="author">{props.author}</p>
                                    </div>
                                    <div className="level-right">
                                        <p className="level-item">            
                                            {moment(props.date).calendar(null, {
                                            sameDay: '[Today]',
                                            lastDay: '[Yesterday]',
                                            lastWeek: '[Last] dddd',
                                            sameElse: 'MMM Do YYYY'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Markdown source={props.content} />
                        </div>
                    </div>     
                </div>
            </article>
        </div>
    )
}

export default CareerTipsPost