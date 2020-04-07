import React, { Component } from 'react';
import {
    Form,
    Button,
    Card
} from 'react-bootstrap';
import {Link, Redirect, withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FlashMessage from 'react-flash-message';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            error: '',
            errorMessage: '',
            formSubmitting: false,
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            redirect: props.location,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
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
        if (this.state.isRegistered) {
            return this.props.history.push("/dashboard");
        }
    }
    componentDidMount() {
        const { prevLocation } = this.state.redirect.state || {prevLocation: { pathname: '/dashboard' } };
        if (prevLocation && this.state.isLoggedIn) {
          return this.props.history.push(prevLocation);
        }
      }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            formSubmitting: true,
        });
        ReactDOM.findDOMNode(this).scrollIntoView();
        let userData = this.state.user;
        axios.post('/api/auth/signup', userData)
        .then(response => {
            return response;
        }).then(json => {
            if (json.data.success) {
                let userData = {
                    id: json.data.id,
                    name: json.data.name,
                    email: json.data.email,
                    activation_token: json.data.activation_token,
                };
                let appState = {
                    isRegistered: true,
                    user: userData
                };
                localStorage["appState"] = JSON.stringify(appState);
                this.setState({
                    isRegistered: appState.isRegistered,
                    user: appState.user,
                });
            } else {
                alert('Failed to register your account!');
            }
        }).catch(error => {if (error.response) {
            let err = error.response.data;
            this.setState({
                error: err.message,
                errorMessage: err.errors,
                formSubmitting: false,
            });
        } else if (error.request) {
            let err = error.request;
            this.setState({
                error: err,
                formSubmitting: false,
            });
        } else {
            let err = error.message;
            this.setState({
                error: err,
                formSubmitting: false,
            });
        }
    }).finally(this.setState({ 
        error: '' 
    }));
    }

    handleName(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                name: value,
            }
        }));
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

    handlePasswordConfirm(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password_confirmation: value,
            }
        }));
    }    

    render() {
        let errorMessage = this.state.errorMessage;
        let arr = [];
        Object.values(errorMessage).forEach((value) => (
            arr.push(value)
        ));
        return (
            <div className='flex-center position-ref full-height main-bg'>
                <Card.Body className='col-md-6 col-lg-6 col-sm-10'>
                    <Card.Header>Create an account</Card.Header>
                    {this.state.isRegistered ? 
                        <FlashMessage duration={60000} persistOnHover={true}>
                            <h5 className={'alert alert-success'}>Account created, redirecting...</h5>
                        </FlashMessage>
                    : ''}
                    {this.state.error ? 
                        <FlashMessage duration={90000} persistOnHover={true}>
                            <h5 className={'alert alert-danger'}>Error: {this.state.error}</h5>
                            <ul>
                                {arr.map((item, i) => (
                                    <li key={i}>
                                        <h5 style={{ color: 'red'}}>{item}</h5>
                                    </li>
                                ))}
                            </ul>
                        </FlashMessage> 
                    : ''}
                    <Form className='form-home' onSubmit={this.handleSubmit}>
                    <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter your name...' required onChange={this.handleName} />
                        </Form.Group>                       
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
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type='password' placeholder='Please confirm your password...' required onChange={this.handlePasswordConfirm} />
                        </Form.Group>                       
                        <Button variant='primary' type='submit' disabled={this.state.formSubmitting ? 'disabled' : ''}>
                            Register
                        </Button>
                        <div style={{ marginTop: 15}}>
                            <Link to='/'>Already have an account?</Link>
                        </div>                       
                    </Form>
                </Card.Body>
            </div>
        )
    }
}