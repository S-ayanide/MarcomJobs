import React from 'react'
import JobCard from './JobCard/JobCard'
import * as contentful from 'contentful'
import './Jobs.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import JobFilter from './JobFilter/JobFilter'

class Jobs extends React.Component{

    state = {
        jobs: [],
        searchField: ""
    }  
    
    client = contentful.createClient({
        space: 'SPACE_ID',
        accessToken: 'ACCESS_TOKEN'
    })
        
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }  
    
    fetchPosts = () => this.client.getEntries();
    
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
                        <Col>
                            <JobFilter />
                        </Col>
                        <Col xs={6}>                                                     
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
