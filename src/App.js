import React from 'react';
import Header from './Header';
import Info from './Info';
import Media from './Media';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="outer-container">
      <div className="background-image"></div>
      <div className="layer">
        <header className="App-header">
          <Header />
        </header>
        <div className="inner-container">
          <div className="container">
            <Info />
            <Media />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
