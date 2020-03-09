import React, { Component } from 'react';
import './CareerTips.css';
import * as contentful from 'contentful';
import CareerTipsCard from './CareerTipsCard/CareerTipsCard';
import Scroll from '../../Components/Scroll/Scroll';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CareerTips extends Component {  
    state = {
        posts: [],
        searchField: ""
    }  
    
    client = contentful.createClient({
        space: 'gcsvcayxyrlh',
        accessToken: 'lW9XQDXeYtpYIQ_nmZyiRwosYFwQEu3TPE68gj1m8Cg'
    })  
    
    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }  
    
    fetchPosts = () => this.client.getEntries()  
    
    setPosts = response => {
        this.setState({
        posts: response.items
        })
        console.log(this.state.posts)
    }  

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });        
    }

    // else
    //                         if(this.state.posts[i].fields.title.toLowerCase().includes(this.state.searchField.toLowerCase())) { 
    //                             return <CareerTipsCard key={i} {...fields} />                                
    //                         }

    
    render() {

        return (
            <div className="careertips_main">
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    {this.state.posts.map(({fields}, i) =>  {                            
                        if((i+1)%3 !== 0){
                            return(
                                <div className="careerTipBox">
                                    <CareerTipsCard key={i} {...fields} />                               
                                </div>
                            );
                        }                   
                    })
                }                   
                </Scroll>                
            </div>
        )
    }
}

export default CareerTips;