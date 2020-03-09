import React from 'react';
import CardList from '../../Components/CardList/CardList';
import app from '../../Config/firebaseConfig';
import './Home.css';
import LeftScroll from '../../Components/Scroll/LeftScroll/LeftScroll';
import RightScroll from '../../Components/Scroll/RightScroll/RightScroll';
import CardDescription from '../../Components/CardDescription/CardDescription';
import AutoComplete from '../../Components/AutoComplete/AutoComplete';
import DashboardImage from '../../assets/Dashboard/DashboardImage.png';

class Home extends React.Component{

    constructor(){
        super()        
        this.database = app.database().ref('Jobs/JobList/');        
        this.descriptionDatabase = app.database().ref('Jobs/JobDesc/');
        this.state = {            
            searchField: '',
            description: [],
            jobs: [],   
            companyName: "",
            location:"",
            urlToImage:"",
            url:"",
            name: "",
            role:"",
            id:"",
            desc: "",
            benefit: "",
            eduAndWork: "",
            responsibility: "",
            skills: "",
            type: ""        
        }
    }

    getData = (data) => {
        
        let values = data.val();    
        const res = values
        const post = res.filter(item => item)
        console.log(res);        

        post.forEach(item => {
            const newJobList = { 
                companyName: item.companyName,
                location: item.location,                
                role: item.role,
                urlToImage: item.urlToImage,
                url: item.url,
                id: item.id
            }

            this.setState({
                jobs: [...this.state.jobs, newJobList]
            });
        });                
    }

    getDescriptionData = (data) => {
        
        let values = data.val();    
        const res = values
        const post = res.filter(item => item)
        console.log(res);        

        post.forEach(item => {
            const newJobDescription = { 
                name: item.companyName,
                desc: item.desc,
                benefit: item.benefit,
                eduAndWork: item.eduAndWork,
                responsibility: item.responsibility,
                skills: item.skills,
                type: item.type
            }

            this.setState({
                description: [...this.state.description, newJobDescription]
            });
        });                
    }

    errData = (err) => {
        console.log("Error");
        console.log(err);
    }    

    componentDidMount(){
        this.database.on('value', this.getData, this.errData);  
        this.descriptionDatabase.on('value', this.getDescriptionData, this.errData); 
    }
  
    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });
    }
//     { this.state.description.map(({value}, i) => {
//         console.log(value)
//         if(i === 0){
//             return <CardDesc key={i} {...this.state.description} />
//         }
//     }
// )}



    render(){        

        return(
            <div className="home">
                <div className="dashboard">
                    <img className="dashboardImage" src={DashboardImage} alt="Find your Dream Job" />
                </div>
                <div className="textWrapper">                                       
                    <AutoComplete />
                </div>
                <div className="homeTest">
                    <LeftScroll>
                        <div className="jobLists">
                            <CardList jobs={this.state.jobs}/>                
                        </div>                    
                    </LeftScroll>   
                    <RightScroll>
                        <div className="jobDesc">
                            <CardDescription path={this.props.match.params} desc={this.state.description}/>
                        </div>  
                    </RightScroll>                               
                </div>
            </div>
            
        );
    }
}

export default Home;