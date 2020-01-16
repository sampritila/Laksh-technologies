import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Menu from './Components/Menu';


class App extends React.Component {
  

  render(){

 
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}
}

export default App;
