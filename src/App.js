import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import app from './Config/firebaseConfig';
import { AuthProvider } from './Components/Auth/Auth'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

import CareerTips from './Screens/CareerTips/CareerTips';
import CareerTipsPost from './Screens/CareerTips/CareerTipsPost/CareerTipsPost'
import Home from './Screens/Home/Home';
import JobPost from './Screens/Jobs/JobPost/JobPost'
import Jobs from './Screens/Jobs/Jobs';
import Review from './Screens/Review/Review'
import Toolbar from './Components/Toolbar/Toolbar';
import Login from './Screens/Login/Login'
import SignUp from './Screens/SignUp/SignUp';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    app.auth().onAuthStateChanged( user => {
      if(user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render(){        

    return (
      <AuthProvider>
        <Router>
          <Toolbar />
          {this.state.user ?             
            <Switch>              
              <PrivateRoute exact path="/" component = {Home} />              
              <Route path="/login" exact component = {Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/reviews" exact component={Review} />   
              <Route path="/careerTips" exact component={CareerTips} />            
              <Route path="/careerTips/:careerTipsPost" component={CareerTipsPost} />  
              <Route path="/jobs" exact component={Jobs} />
              <Route path="/jobs/:jobsPost" component={JobPost} history={Jobs}/>
            </Switch>
            :
            <Switch>              
              <PrivateRoute exact path="/" component = {Home} />              
              <Route path="/login" exact component = {Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/reviews" exact component={Review} />   
              <Route path="/careerTips" exact component={CareerTips} />            
              <Route path="/careerTips/:careerTipsPost" component={CareerTipsPost} />  
              <Route path="/jobs" exact component={Jobs} />
              <Route path="/jobs/:jobsPost" component={JobPost} history={Jobs}/>
            </Switch>
          }              
        </Router>
      </AuthProvider>
    );
  }
}


export default App;
