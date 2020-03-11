import React from 'react'
import JobCard from './JobCard/JobCard'
import * as contentful from 'contentful'
import './Jobs.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'

class Jobs extends React.Component{

    state = {
        jobs: [],
        searchField: ""
    }  
    
    client = contentful.createClient({
        space: 'gcsvcayxyrlh',
        accessToken: 'lW9XQDXeYtpYIQ_nmZyiRwosYFwQEu3TPE68gj1m8Cg'
    })
        
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }  
    
    fetchPosts = () => this.client.getEntries({
        'content_type': 'jobs'
    });
    
    setPosts = response => {
        this.setState({
            jobs: response.items
        })
        console.log(this.state.jobs)
    }

    render(){
        return(
            <div className="job_main">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            {console.log(this.state.jobs)}
                            {this.state.jobs.length > 0 ? 
                                this.state.jobs.map(({fields}, i) =>  {                                       
                                    return <JobCard values={i} {...fields} />
                                })
                            : 
                                <div className="loadSpin">
                                    <Spinner animation="border" variant="warning" />
                                </div>
                            }                            
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Jobs;