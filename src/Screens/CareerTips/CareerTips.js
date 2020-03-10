import React, { Component } from 'react';
import Scroll from '../../Components/Scroll/Scroll'
import './CareerTips.css';
import * as contentful from 'contentful';
import CareerTipsCard from './CareerTipsCard/CareerTipsCard';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Spinner from 'react-bootstrap/Spinner'

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
    
    render() {

        return (
            <div className="careertips_main">
                <div className="careerTipsSearch">
                    <SearchBox searchChange={this.onSearchChange} />                
                </div>
                <div className="careerTipsScroll">
                    <Scroll height={800}>
                        <div className="careertips_box">
                            {this.state.posts.length > 0 ? 
                                this.state.posts.map(({fields}, i) =>  {   
                                    if(this.state.searchField === ""){
                                        return <CareerTipsCard values={i} {...fields} />    
                                    }else if(this.state.posts[i].fields.title.toLowerCase().includes(this.state.searchField.toLowerCase())){
                                        return <CareerTipsCard values={i} {...fields} />
                                    }      
                                })
                            : 
                                <div className="loadSpin">
                                    <Spinner animation="border" variant="warning" />
                                </div>
                            }
                        </div>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default CareerTips;