import React from 'react'
import * as contentful from 'contentful'
import CardDesc from '../CardDesc/CardDesc';

class CardDescription extends React.Component {
    state = {
        posts: []        
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
    
    render() {

        console.log(this.props)
        var paramValue = '/' + this.props.path.id                

        return (
            <div>                
                 {this.state.posts.map(({fields}, i) => {                    
                    if (paramValue === fields.url) {                                    
                        return <CardDesc id={i} {...fields} des={this.props.desc[i]}/>    
                    } else {
                        console.log("NO")
                    }
                })}
            </div>
        )
    }
}

export default CardDescription