import React, { Component } from 'react';
import '../styles/css/header.css';
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
        </div>
        );
    }
}
export default Header;
