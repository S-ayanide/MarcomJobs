import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful'
import CardList from './CardList/CardList';
import './Home.css';
import SearchBox from '../../Components/SearchBox/SearchBox'
import Button from 'react-bootstrap/Button'
import ControlledCarousel from '../../Components/Carousel/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Partners from './Partners/Partners'
import SearchBar from '../../Components/SearchBar/SearchBar'

const Home = () => {        
  
    const client = contentful.createClient({
        space: process.env.REACT_APP_CONTENTFUL_JOBS_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_JOBS_ACCESS_TOKEN
    })

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);      
    const [latestJobs] = useState(5);    

    const [jobrole, setJobRole] = useState("")
    const [jobtype, setJobType] = useState("")
    const [joblocation, setJobLocation] = useState("")
    const [userSearch, setUserSearch] = useState("")    

    const companyImageListArr = []; 

    const UserSearch = (value) => {
        setUserSearch(value)
    }

    const JobRole = (value) => {
        setJobRole(value)
    };

    const JobType = (value) => {
        setJobType(value)
    };

    const JobLocation = (value) => {
        setJobLocation(value)
    };

    const handleChange = e => {
        console.log(e.target.files)
    }

    useEffect(() => {
        const fetchPosts = async () =>{
            setLoading(true);
            const response = await client.getEntries();
            setJobs(response.items);
            setLoading(false); 
        }         
        
        fetchPosts();                        
    }, []);       

    jobs.forEach(({fields}) => {
        companyImageListArr.push(fields.companyImage)
    })        

    return(
        <div className="home">
            <div className="dashboard">
                <ControlledCarousel />
            </div>
            <div className="textWrapper">   
                <p>Find Jobs Better and Faster</p>
                <SearchBox 
                    placeholder={"Search Jobs"} 
                    getUserSearch = {UserSearch}
                />                
            </div>
            <div className="cvWrapper">
                <div className="cvWrapper_2">
                    <p>Help us find you a<br></br>better match!</p>
                    <label className="upload_label" for="upload-cv">Upload CV</label>
                    <input type="file" id="upload-cv" onChange={handleChange}></input>
                </div>
            </div>
            <div className="partnersDiv">   
                <div className="partners">               
                    <Partners images={companyImageListArr} />
                </div>
            </div>
            <div className="homeTest">
                <Container>
                    <Row>
                        <SearchBar 
                            getRole={JobRole} 
                            getType={JobType}
                            getLocation={JobLocation}
                            background={'white'}
                        />
                    </Row>
                    {
                        jobs.map(({fields},i) => {
                            console.log(fields)
                            if(i < latestJobs){
                                if(userSearch != "" && (fields.role.toLowerCase().includes(userSearch.toLowerCase().trim()) || fields.jobType.toLowerCase().includes(userSearch.toLowerCase().trim()) || fields.companyName.toLowerCase().includes(userSearch.toLowerCase().trim()))){
                                    return <CardList jobs={i} {...fields} />
                                }else{
                                    if(fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && jobtype == "" && joblocation == ""){                                    
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && jobrole == "" && jobtype == ""){
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && jobrole == "" && joblocation == ""){
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && jobtype == ""){
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && jobrole == ""){
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim()) && joblocation == ""){
                                        return <CardList jobs={i} {...fields} />
                                    }else if(fields.jobType.toLowerCase().includes(jobtype.toLowerCase().trim()) && fields.location.toLowerCase().includes(joblocation.toLowerCase().trim()) && fields.role.toLowerCase().includes(jobrole.toLowerCase().trim())){
                                        return <CardList jobs={i} {...fields} />
                                    }
                                }
                                //return <CardList jobs={i} {...fields} />
                            }
                        })
                    }
                </Container>                    
            </div>
        </div>  
    );
}

export default Home;