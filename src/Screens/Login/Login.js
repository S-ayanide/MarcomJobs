import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from "react-router";
import './Login.css'
import { FaFacebookF, FaTwitter, FaLock, FaUserAlt } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import app from '../../Config/firebaseConfig';
import { AuthContext } from '../../Components/Auth/Auth';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


const Login = ({ history }) => {

    const responseFacebook = (response) => {
        console.log(response);
    }

    const responseGoogle = (response) => {
        console.log(response);
    }
    
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/" />;
    }

    return(
        <div class="container">
            <div class="omb_login">
                <h3 class="omb_authTitle">Login or <a href="/signup">Sign up</a></h3>
                <div class="row omb_row-sm-offset-3 omb_socialButtons">
                    <div class="col-xs-4 col-sm-3">                        
                        <FacebookLogin
                            appId= {process.env.REACT_APP_FACEBOOK_APP_ID}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon={<FaFacebookF />}
                            cssClass="login-icons btn btn-lg btn-block omb_btn-facebook"
                            textButton = ""
                        />                        
                    </div>                    
                    <div class="col-xs-4 col-sm-3">  
                        <div className="btnGoogle">
                            <GoogleLogin
                                clientId={process.env.REACT_APP_GOOGLE_APP_ID}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                className="btnGoogle1"
                            >Sign In with <IoLogoGoogleplus /></GoogleLogin>
                        </div>
                    </div>	
                </div>

                <div class="row omb_row-sm-offset-3 omb_loginOr">
                    <div class="col-xs-12 col-sm-6">
                        <hr class="omb_hrOr" />
                        <span class="omb_spanOr">or</span>
                    </div>
                </div>

                <div class="row omb_row-sm-offset-3">
                    <div class="col-xs-12 col-sm-6">	
                        <form class="omb_loginForm" action="" autocomplete="off" method="POST" onSubmit={handleLogin}>
                            <div class="input-group">
                                <span class="input-group-addon"><FaUserAlt /></span>
                                <input type="text" class="form-control" name="email" placeholder="email address" />
                            </div>
                            <span class="help-block"></span>
                                                
                            <div class="input-group">
                                <span class="input-group-addon"><FaLock /></span>
                                <input  type="password" class="form-control" name="password" placeholder="Password" />
                            </div>                            

                            <button class="btn btn-lg btn-primary btn-block submitBtn" type="submit">Login</button>
                        </form>
                    </div>
                </div>
                <div class="row omb_row-sm-offset-3">
                    <div class="col-xs-12 col-sm-3">
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me" />  Remember Me
                        </label>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <p class="omb_forgotPwd">
                            <a href="#">Forgot password?</a>
                        </p>
                    </div>
                </div>	    	
            </div>
        </div>
    );
}

export default Login;