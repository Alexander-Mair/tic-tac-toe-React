import React from 'react';
import ReactDOM from 'react-dom';
import calculateWinner from './calculatewinner.js';
import Square from './square.js';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			};
	}
	
  renderSquare(i) {
    return (
	<Square value={this.props.squares[i]}
	onClick={()=>{this.props.onClick(i)}}/>
  );
  }

  render() {
    const winner = calculateWinner(this.state.squares); 
	let status;    
	if (winner) {     
	status = 'Winner: ' + winner;    } 
	else {      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');    
	}

    return (
      <div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}