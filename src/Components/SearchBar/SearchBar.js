import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IoIosSearch } from "react-icons/io";
import './SearchBar.css'

const SearchBar = ({getRole, getType, getLocation, background}) => {    

    const [jobRole, setJobRole] = useState("")
    const [jobType, setJobType] = useState("")
    const [jobLocation, setJobLocation] = useState("")

    const onJobRoleChanged = (event) => {        
        setJobRole(event.target.value)
    }

    const onJobTypeChanged = (event) => {        
        setJobType(event.target.value)
    }

    const onJobLocationChanged = (event) => {        
        setJobLocation(event.target.value)
    }

    return(
        <Container>
            <Row className="searchbar_div" style={{background: `${background}`}}>
                <Col xs={5}>
                    <input className="searchbar_box" value={jobRole} onChange={onJobRoleChanged} type='text' placeholder="Search Job Roles"/>
                </Col>
                <Col>
                    <input className="searchbar_box" value={jobType} onChange={onJobTypeChanged} type='text' placeholder="Search Job Type"/>
                </Col>
                <Col>
                    <input className="searchbar_box" value={jobLocation} onChange={onJobLocationChanged} type='text' placeholder="Search Job Location"/>
                </Col>
                <Button 
                    className="p-3" 
                    variant="dark"
                    onClick={() => {
                        getRole(jobRole)
                        getType(jobType)
                        getLocation(jobLocation)
                    }}
                    >
                    <IoIosSearch />
                </Button>
            </Row>
        </Container>
    );
}

export default SearchBar;