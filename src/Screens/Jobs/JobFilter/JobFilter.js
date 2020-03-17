import React from 'react';
import './JobFilter.css'

class JobFilter extends React.Component{
    render(){
        return(
            <div className="jobFilter">
                <p>Salary</p>
                <ul>
                    <li>5,000 - 10,000</li>
                    <li>10,000 - 20,000</li>
                    <li>30,000 - 50,000</li>
                    <li>50,000 - 1,00,000</li>
                    <li>1,00,000 - 2,10,000</li>
                </ul>
                <br></br>
                <p>Job Type</p>
                <ul>
                    <li>Internship</li>
                    <li>Fresher</li>
                    <li>Full-Time</li>
                    <li>Part-Time</li>
                    <li>Walk-in</li>
                </ul>
                <br></br>
                <p>Location</p>
                <ul>
                    <li>Location 1</li>
                    <li>Location 2</li>
                    <li>Location 3</li>
                    <li>Location 4</li>
                    <li>Location 5</li>
                </ul>
                <br></br>
                <p>Company</p>
                <ul>
                    <li>Capgemini</li>
                    <li>JPMorgan</li>
                    <li>Amazon</li>
                    <li>ITC Infortech</li>                    
                </ul>
            </div>
        );
    }
}

export default JobFilter;