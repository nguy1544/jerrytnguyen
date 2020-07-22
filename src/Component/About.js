import React, { Component } from 'react';
import '../styles/css/about.css'

class About extends Component {
    render() {
        return (
            <div className="app-about">
                <h4>ABOUT ME</h4>
                <span className="avatar">
                    <img className="avatar" src="../resources/avatar.jpeg" alt="avatar.jpeg"/>
                </span>
                <ul className="list">
                    <li>Jerry Nguyen</li>
                    <li>Consultant (Software Engineer)</li>
                    <li><a href="https://objectpartners.com" target="_blank">Object Partners</a></li>
                </ul>
            </div>
        );
    }
}
export default About;
