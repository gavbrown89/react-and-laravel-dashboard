import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router, withRouter } from 'react-router-dom';
import history from '../../services/history';

class Header extends React.Component {
    render() {
        return (
            <div className='dash-header'>

            </div>
        )
    }
}

export default withRouter(Header);