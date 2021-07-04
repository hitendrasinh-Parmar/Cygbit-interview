import React , { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navigation";
class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;

