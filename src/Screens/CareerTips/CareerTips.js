import React, { Component } from 'react';
import './CareerTips.css';
import * as contentful from 'contentful';
import CareerTipsCard from './CareerTipsCard/CareerTipsCard';
import Scroll from '../../Components/Scroll/Scroll';
import SearchBox from '../../Components/SearchBox/SearchBox';

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
            <div className="news_main">
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    {this.state.posts.map(({fields}, i) =>  {
                            if(this.state.searchField === ""){                                 
                                return <CareerTipsCard key={i} {...fields} />
                            }else
                            if(this.state.posts[i].fields.title.toLowerCase().includes(this.state.searchField.toLowerCase())) { 
                                return <CareerTipsCard key={i} {...fields} />                                
                            } 
                        }                     
                    )}                    
                </Scroll>                
            </div>
        )
    }
}

export default CareerTips;