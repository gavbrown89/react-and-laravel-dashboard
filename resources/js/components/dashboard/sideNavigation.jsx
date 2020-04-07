import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router, withRouter, Link } from 'react-router-dom';
import history from '../../services/history';

import DashboardHome from './main';
import main from './main';

class DashboardNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        }
        this.onToggleShow = this.onToggleShow.bind(this);
        this.onToggleUnshow = this.onToggleUnshow.bind(this);
    }
    onToggleShow() {
        this.setState(state => ({
          hovered: true
        }));
    }; 
    onToggleUnshow() {
        this.setState(state => ({
          hovered: false
        }));
    };
    render() {
        const { hovered } = this.state; 
        const dashLink = hovered ? { visibility: 'visible' } : { visibility: 'hidden' };
        return (
            <div>
                <div className='side-header'>
                    <p>Side nav</p>
                </div>
                <nav>
                    <div className='side-container'>
                        <Link to="/dashboard" className='side-link' onMouseEnter={this.onToggleShow} onMouseLeave={this.onToggleUnshow}><span className='dash-link' style={dashLink}>Dashboard</span></Link>
                    </div>
                </nav> 
            </div>
        )
    }
}

export default withRouter(DashboardNavigation);