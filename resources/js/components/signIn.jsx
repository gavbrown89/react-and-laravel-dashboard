import React, { Component } from 'react';
import { 
    Form,
    Button,
    Card 
} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import history from '../services/history';
import Axios from 'axios';
import FlashMessage from 'react-flash-message';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            error: '',
            formSubmitting: false,
            user: {
                email: '',
                password: '',
            },
            redirect: props.location,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState,
            });
        }
    }
    componentDidMount() {
        const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' }};
        if (prevLocation && this.state.isLoggedIn) {
            return this.props.history.push(prevLocation);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({formSubmitting: true});
        let userData = this.state.user;
        console.log('userData', userData);
        axios({
            url: '/api/auth/login',
            method: 'POST',
            data: userData
        })
        .then(response => response.data)
        .then((data) => {
            console.log(data)
            this.setState({
                access_token: data.access_token
            });
            this.props.history.push("/dashboard")
        })
        .catch(error => {if (error.response) {
            let err = error.response.data;
            this.setState({
              error: err.message,
              errorMessage: err.errors,
              formSubmitting: false
            })
          }
          else if (error.request) {
            let err = error.request;
            this.setState({
              error: err,
              formSubmitting: false
            })
         } else {
           let err = error.message;
           this.setState({
             error: err,
             formSubmitting: false
           })
       }
     })
     .finally(this.setState({error: ''}));
    }

    handleEmail(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                email: value,
            }
        }));
    }

    handlePassword(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password: value,
            }
        }));
    }   

    render() {
        const { state = {} } = this.state.redirect;
        const { error } = state;
        return (
            <div className='flex-center position-ref full-height main-bg'>
                <Card.Body className='col-md-6 col-lg-6 col-sm-10'>
                    <Card.Header>Sign in to your account</Card.Header>
                    {this.state.isLoggedIn ? 
                        <FlashMessage suration={60000} persistOnHover={true}>
                            <h5 className={'alert alert-success'}>Login successful, redirecting...</h5>
                        </FlashMessage>
                    : ''}
                    {this.state.error ? 
                        <FlashMessage duration={100000} persistOnHover={true}>
                            <h5 className={"alert alert-danger"}>Error: {this.state.error}</h5>
                        </FlashMessage> 
                    : ''}
                    {error && !this.state.isLoggedIn ? 
                        <FlashMessage duration={100000} persistOnHover={true}>
                            <h5 className={"alert alert-danger"}>Error: {error}</h5>
                        </FlashMessage> 
                    : ''}                 
                    <Form className='form-home' onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter your email...' required onChange={this.handleEmail} />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter your password...' required onChange={this.handlePassword} />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Sign in
                        </Button>
                        <div style={{ marginTop: 15}}>
                            <Link to='/register'>Create an account</Link>
                        </div>
                    </Form>
                </Card.Body>
            </div>
        )
    }
}

export default withRouter(SignIn);