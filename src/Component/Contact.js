import React, { Component } from 'react';
import '../styles/css/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="app-contact">
                <h4>CONTACT</h4>
                <ul className="actions">
                    <li><a className="fa fa-linkedin fa-4x" target="_blank" href="https://www.linkedin.com/in/jerrytnguyen/" /></li>
                    <li><a className="fa fa-google fa-4x" href="mailto:nguye1544@gmail.com" /></li>
                </ul>
            </div>
        );
    }
}
export default Contact;
