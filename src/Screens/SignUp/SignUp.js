import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../Config/firebaseConfig";
import { FaLock, FaUserAlt } from "react-icons/fa";
import "./SignUp.css";

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, firstname, lastname } = event.target.elements;    
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(function(result) {
          return result.user.updateProfile({
            displayName: firstname.value + " " + lastname.value
          })
        })
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div class="container">
      <div class="omb_login">
          <h3 class="omb_authTitle">Sign up</h3>        

          <div class="row omb_row-sm-offset-3">
              <div class="col-xs-12 col-sm-6">	
                  <form class="omb_loginForm" action="" autocomplete="off" method="POST" onSubmit={handleSignUp}>
                      <div class="input-group">
                          <span class="input-group-addon"><FaUserAlt /></span>
                          <input type="text" class="form-control" name="firstname" placeholder="First Name" />
                      </div>
                      <div class="input-group">
                          <span class="input-group-addon"><FaUserAlt /></span>
                          <input type="text" class="form-control" name="lastname" placeholder="Last Name" />
                      </div>
                      <div class="input-group">
                          <span class="input-group-addon"><FaUserAlt /></span>
                          <input type="text" class="form-control" name="email" placeholder="Email address" />
                      </div>
                      <span class="help-block"></span>
                                          
                      <div class="input-group">
                          <span class="input-group-addon"><FaLock /></span>
                          <input  type="password" class="form-control" name="password" placeholder="Password" />
                      </div>                            

                      <button class="btn btn-lg btn-primary btn-block submitBtn" type="submit">Sign Up</button>
                  </form>
              </div>
          </div>                	    	
      </div>
  </div>    
  );
};

export default withRouter(SignUp);