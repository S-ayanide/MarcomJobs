import './Jobs.css'

import * as contentful from 'contentful'

import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import JobCard from './JobCard/JobCard'
import JobFilter from './JobFilter/JobFilter'
import Newsletter from './NewsLetter/Newsletter'
import SearchBar from '../../Components/SearchBar/SearchBar'
//import Pagination from '../../Components/Pagination/Pagination'
import Scroll from '../../Components/Scroll/Scroll'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

const Jobs = () => {

    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_JOBS_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_JOBS_ACCESS_TOKEN
    });

    state = {
        jobs: [],
        searchField: ""
    }      

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);    

    //Pagination
    // const [currentPage, setCurrentPage] = useState(1);
    // const [jobsPerPage] = useState(3);    

    const [jobrole, setJobRole] = useState("")
    const [jobtype, setJobType] = useState("")
    const [joblocation, setJobLocation] = useState("")
  
    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true);
            const response = await client.getEntries();
            setJobs(response.items);
            setLoading(false); 
        }         
        
        fetchPosts();                        
    }, []);
  
    //Adding Unique Keys to individual Job items
    let i = 0;
    jobs.forEach((item) => {
        item.id = i++;
    })   

    // Get current posts
    // const indexOfLastJob = currentPage * jobsPerPage;
    // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    //Get Job Search Details
    const JobRole = (value) => {
        setJobRole(value)
    };

    const JobType = (value) => {
        setJobType(value)
    };

    const JobLocation = (value) => {
        setJobLocation(value)
        
    };
  
    // Change page
    //const paginate = pageNumber => setCurrentPage(pageNumber);

    //Paginate div
    //     <Pagination className="pagination"
    //     postPerPage={jobsPerPage} 
    //     totalPosts={jobs.length} 
    //     paginate={paginate} 
    //     />
    
    return(
        <div className="job_main">
            <Container>
                <Row>
                    <SearchBar 
                        getRole={JobRole} 
                        getType={JobType}
                        getLocation={JobLocation}
                        background={'#e1e6ed'}
                    />
                </Row>
                <Row>
                    <Col>
                        <JobFilter
                            getType={JobType}
                            getLocation={JobLocation}
                        />
                    </Col>
                    <Col xs={6}>                                                         
                        <div className="jobBody">
                            {//currentJobs.length > 0 ? 
                                jobs.length > 0 ?
                                <Scroll height={780}>
                                    {
                                        jobs.map(({fields},i) =>  {
                                            if(fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && jobtype == "" && joblocation == ""){                                                                                                                                                                                       
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && jobrole == "" && jobtype == ""){
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && jobrole == "" && joblocation == ""){
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && jobtype == ""){
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && jobrole == ""){
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && joblocation == ""){
                                                return <JobCard values={i} {...fields} />
                                            }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim())){
                                                return <JobCard values={i} {...fields} />
                                            }
                                            //return <JobCard value = {i} {...fields} />                                            
                                        })                                            
                                    }
                                </Scroll>                              
                            :
                                <div className="loadSpin">
                                    <Spinner animation="border" variant="warning" />
                                </div>
                            }                                                        
                        </div>                                            
                    </Col>
                    <Col>
                        <Newsletter />
                    </Col>
                </Row>
            </Container>            
        </div>
    );
};

export default Jobs;
