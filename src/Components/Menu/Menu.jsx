import "./Menu.css";
import React from "react";
import {HashRouter,Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

function template() {
  return (
    <div>
    <HashRouter>
    <div className="menu">
      <div className="container">
        <nav>
          <ul>
            <li><a href="#/Home">Home</a></li>
            <li><a href="#/About">Avatars</a></li>
            <li><a href="#/Contact">Contact</a></li>
            <li><a href="#/Services">Services</a></li>
          </ul>
        </nav>
      </div>
      <Route path="/" exact component ={Home}/>
      <Route path="/Home" component ={Home}/>
      <Route path="/About" component ={About}/>
      <Route path="/Contact" component ={Contact}/>
      <Route path="/Services" component ={Services}/>
    </div>
    </HashRouter>
    </div>
  );
}

export default template;
