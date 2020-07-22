import React, { Component } from 'react';
import PropTypes from "prop-types";
import Contact from "./Contact";

class ContentLayout extends Component {
    render() {
        return (
        <div className="app-contentLayout">
            <p>
                Come back later.
            </p>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Contact />
            <hr />
                <a className="btn btn-outline-info" href="Resume.pdf" target="_blank">Resume</a>
            <hr />
        </div>
        );
    }

}
export default ContentLayout;
