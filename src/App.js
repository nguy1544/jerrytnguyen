import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './Component/Header'
import ContentLayout from './Component/ContentLayout'
import Footer from './Component/Footer'


function App() {
    var route = "";
  return (

    <div className="app-wrapper">
        {/* Begin Header*/}
        <Header className="app-header" />

        {/* Begin ContentLayout*/}

        {/* Begin Footer*/}
        <Footer className="app-footer" />
    </div>
  );
}

export default App;
