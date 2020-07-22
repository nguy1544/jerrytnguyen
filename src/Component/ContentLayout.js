import React, { Component } from 'react';
import Contact from "./Contact";
import About from "./About";

class ContentLayout extends Component {
    render() {
        return (
        <div className="app-contentLayout">
            <About />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <Contact />
            <hr />
                <a className="btn btn-outline-light btn-resume" href="Resume.pdf" target="_blank">resume</a>
            <hr />
        </div>
        );
    }

}
export default ContentLayout;
