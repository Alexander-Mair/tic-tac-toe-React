import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './game.js';
import Heading from './heading.js'
import calculateWinner from './calculatewinner.js';







// ========================================

ReactDOM.render(
<div className="app">
<Heading/>
  <Game />
  </div>,
  document.getElementById('root')
);