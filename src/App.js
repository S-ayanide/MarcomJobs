import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Screens/Home/Home';
import Review from './Screens/Review/Review'
import 'bootstrap/dist/css/bootstrap.min.css'
import CareerTips from './Screens/CareerTips/CareerTips';
import Jobs from './Screens/Jobs/Jobs';
import CareerTipsPost from './Screens/CareerTips/CareerTipsPost/CareerTipsPost'
import JobPost from './Screens/Jobs/JobPost/JobPost'

class App extends Component {

  render(){        

    return (
      <div>        
        <Toolbar />                
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />                          
            <Route path="/reviews" exact component={Review} />   
            <Route path="/careerTips" exact component={CareerTips} />            
            <Route path="/careerTips/:careerTipsPost" component={CareerTipsPost} />  
            <Route path="/jobs" component={Jobs} />
            <Route path="/jobs/:jobsPost" component={JobPost} />
          </Switch>
        </Router>
      </div> 
    );
  }
}

export default App;
