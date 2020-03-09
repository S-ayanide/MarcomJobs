import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Screens/Home/Home';
import Review from './Screens/Review/Review'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render(){        

    return (
      <div>        
        <Toolbar />                
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />                          
            <Route path="/reviews" exact component={Review} />            
          </Switch>
        </Router>
      </div> 
    );
  }
}

export default App;
