import React from 'react';
import moment from 'moment'
import * as Markdown from 'react-markdown'

const JobPost = ({ location: { state: { props } }}) => {    
    return (        
        <div className="box">
            <article className="media">            
                <div className="media-content">
                    <div className="content">                        
                        <div className="content_shape">
                            <h1 className="content_title">{props.companyName}</h1>
                            <p className="content_subtitle">{props.role}</p>
                            <div className="author_section">                                
                                <div className="level">                                    
                                    <div className="level-right">
                                        <p className="level-item">            
                                            {moment(props.postingDate).calendar(null, {
                                            sameDay: '[Today]',
                                            lastDay: '[Yesterday]',
                                            lastWeek: '[Last] dddd',
                                            sameElse: 'MMM Do YYYY'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Markdown className="content_source" source={props.content} />
                        </div>
                    </div>     
                </div>
            </article>
        </div>
    )
}

export default JobPost;