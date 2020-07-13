import React, { Component } from 'react';
import '../css/header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContentLayout from './ContentLayout';
import Footer from './Footer';

class Header extends Component {
    render() {
        return (
        <div className="app-header">
        <Router>
                  <div className="navbar-wrapper">
                    <ul className="navbar-list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <a href="Resume.pdf" target="_blank">Resume</a>
                      </li>
                    </ul>

                    {/*
                      A <Switch> looks through all its children <Route>
                      elements and renders the first one whose path
                      matches the current URL. Use a <Switch> any time
                      you have multiple routes, but you want only one
                      of them to render at a time
                    */}
                    <Switch>
                      <Route exact path="/">
                        <ContentLayout route="home" />
                      </Route>
                      <Route path="/about">
                        <ContentLayout route="about" />
                      </Route>
                      <Route path="/contact">
                        <ContentLayout route="contact" />
                      </Route>
                    </Switch>
                  </div>
                </Router>
        </div>
        );
    }
}
export default Header;
