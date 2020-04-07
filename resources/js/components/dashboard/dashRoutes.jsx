import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import history from '../../services/history';

// Import pages
import DashboardHome from './main';

export default class DashRoutes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/dashboard" exact component={DashboardHome} />
                </Switch>
            </Router>
        )
    }
}