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
                    <li>Sr. Software Engineer</li>
                </ul>

                <span>
                    Seasoned software engineer with over 7 years of experience and a versatile background in front-end, back-end, and full-stack development, as well as data engineering.
                    Adept at modernizing applications, crafting secure features, and mentoring junior engineers.
                    My broad skill set enables me to tackle complex projects and deliver robust solutions across the full software development lifecycle.
                </span>
            </div>
        );
    }
}
export default About;
