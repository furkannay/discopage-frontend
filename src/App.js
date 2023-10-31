import React from "react";
import "./App.css";
import TextArea from "./TextArea";
import logo from './discoball.gif';
import auilogo from './auilogo.png';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="App-sign">
          <img src={auilogo} className="unilogo"alt="uni logo"></img>  
          <p>
            Furkan Ay Com20
          </p>

        </div>
        <div className="header-content">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p class="App-head">type for fun</p>
        <a
          className="App-link"
          href="https://github.com/furkannay/clabs20"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow my github :)
        </a>
        <TextArea />
        </div>
      
      </header>
    </div>
  );
}

export default App;


