import React, { Component } from 'react';
import '../css/App.css';
import Game from './Game'
import Navbar from './Navbar';

class App extends Component {
  constructor(props){
    super(props); 
  }
  
  render(){
    return(
      <div>
       <Navbar />
       <Game />
       </div>
    )
  }
}

export default App;
