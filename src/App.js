import React from 'react';
import './styles/css/App.css';
import Header from './Component/Header'
import ContentLayout from './Component/ContentLayout'
import Footer from './Component/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    var route = "";
  return (

    <div className="app-wrapper">
        {/* Begin Header*/}
        <Header className="app-header" />

        {/* Begin ContentLayout*/}
        <ContentLayout />
        {/* Begin Footer*/}
        <Footer className="app-footer" />
    </div>
  );
}

export default App;
