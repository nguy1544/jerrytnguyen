import React, { Component } from 'react';
import '../styles/css/about.css'

class About extends Component {
    render() {
        return (
            <div className="app-about">
                <span className="avatar">
                    <img className="avatar" src="../resources/avatar.JPG" alt="avatar.jpg"/>
                </span>
                <ul className="list">
                    <li><h2>Jerry Nguyen</h2></li>
                    <li>Consultant (Software Engineer)</li>
                    <li><a href="https://objectpartners.com" target="_blank">Object Partners</a></li>
                </ul>
            </div>
        );
    }
}
export default About;
