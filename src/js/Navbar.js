import React from 'react';
import '../css/Navbar.css';

const Navbar = ({onNewGame}) => (
  <header style={{textAlign:"center"}}>
    <h2><a>Guess The Flag</a></h2>
    {/* <nav>
      <li>New Game</li>
    </nav> */}
  </header>
);


export default Navbar;