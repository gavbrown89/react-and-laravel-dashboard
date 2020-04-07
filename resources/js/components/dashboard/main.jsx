import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
import DashboardNavigation from './sideNavigation';
import Header from './header';

import { loadAllData } from "../dashboard/charts/data/linechart";
import LineChart from "../dashboard/charts/components/linechart";
import PieChart from "../dashboard/charts/components/piechart";
import SunBurst from "../dashboard/charts/components/sunburst";

class DashboardHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {},
            data: null,
            body_width: document.body.clientWidth,
            hovered: false,
        }
        window.addEventListener("resize", this.resize().bind(this));
        this.onToggleOpen = this.onToggleOpen.bind(this);
        this.onToggleClose = this.onToggleClose.bind(this);
    }
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user,
            });
        }
        this.load();
    }
    resize() {
        let t;
    
        return event => {
          if (t !== false) {
            clearTimeout(t);
          }
          t = setTimeout(() => {
            const state = Object.assign(this.state, {
              body_width: document.body.clientWidth
            });
            this.setState(state);
          }, 100);
        };
      }
    
      load() {
        loadAllData(this.loaded.bind(this));
    
        setTimeout(() => {
          this.load();
        }, 1000);
      }
    
      loaded(data) {
        this.setState({ data: data });
      }     

      onToggleOpen() {
        this.setState(state => ({
          hovered: true
        }));
      };
    
      onToggleClose() {
        this.setState(state => ({
          hovered: false
        }));
      };     

    render() {
        const { hovered } = this.state;     
        const navStyle = hovered ? { width: 250 } : { width: 50 };
        const mainStyle = hovered ? { marginLeft: 250 } : { marginLeft: 50};
        return (
            <div>
                <div>
                  <aside onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose} className='side-nav' style={navStyle}>
                    <DashboardNavigation />
                  </aside>
                    <main className='main-content' style={mainStyle}>
                        <Header />
                        <div className='inner-container'>
                            <h2 className='dash-title'>Dashboard</h2> 
                            <div className='chart-container' style={{ height: 400}}>
                                <LineChart />
                            </div>                            
                            <div style={{ flexDirection: 'row'}}>
                              <div className='chart-container inline-container' style={{ height: 400}}>
                                <PieChart />
                              </div>
                              <div className='chart-container inline-container' style={{ height: 400}}>
                                <SunBurst />
                              </div>                             
                            </div>
                        </div>
                    </main>  
                </div>           
            </div>
        )
    }
}

export default withRouter(DashboardHome);