import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import history from '../services/history';

// Import pages
import SignIn from './signIn';
import Register from './register';
import DashRoutes from './dashboard/dashRoutes';
import DashboardNavigation from './dashboard/sideNavigation';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={DashRoutes} isPrivate />
                <Route component={SignIn} />
            </Switch>
        </Router>
    )
}

if (document.getElementById('root')) {
    ReactDOM.render(<Routes />, document.getElementById('root'));
}
