import React, { Component } from 'react';
import './Newsletter.css';
import app from '../../../Config/firebaseConfig';
import * as EmailValidator from 'email-validator';
import ThankYou from '../../../Components/ThankYou/ThankYou';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


class Subscribe extends Component{

    constructor(){
        super();
        this.subscribeDatabase = app.database().ref('Newsletter');
        this.state = {
            data: '',
            isSubscribed: false
        }
    }

    textChangeHandler = (event) => {
        this.setState({
            data: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.data.concat('@gmail.com'));
        if( EmailValidator.validate(this.state.data.concat('@gmail.com')) ){
            this.subscribeDatabase.push(this.state.data.concat('@gmail.com'));    
            this.setState({
                data: '',
                isSubscribed: true
            })
        } else {
            this.setState({
                data: 'Please type a valid email'
            })
        }
    }

    render(){

        return (
            this.state.isSubscribed ? <ThankYou />
            :
            <div className="subscribeBody">
                <div className="subscribeElements">
                    <h1>Subscribe to Stay Updated</h1>
                    <form>                        
                        <InputGroup className="textInput" value={this.state.data} onChange={this.textChangeHandler.bind(this)}>
                            <FormControl
                                placeholder="Email"                                
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text className="textInput" id="basic-addon2">@gmail.com</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>            
                        <Button type="submit" variant="secondary" className="submitButton" onClick={this.submitHandler.bind(this)} block>Stay Connected</Button>
                    </form>
                    <p>Your email stays safe with us</p>
                </div>
            </div>
        );
    }
}

export default Subscribe;