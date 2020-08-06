import React from 'react';
import './Board.scss';
import Square from '../Square/Square';

const players = {
  BLUE: 'Blue',
  RED: 'Red'
}

class Board extends React.Component {
  pickStartingPlayer = () => {
    if (Math.round(Math.random(0, 1)) === 0) {
      return players.BLUE;
    } else {
      return players.RED;
    }
  }

  state = {
    currentPlayer: this.pickStartingPlayer(),
    lastSelectedApex: null
  };
  
  changeNextPlayerAndSetLastApex = (clickedApex) => {
    this.setState({ lastSelectedApex: clickedApex});
    this.setState({ currentPlayer: this.state.currentPlayer === players.BLUE ? players.RED : players.BLUE });
  }

  render() {
    return (
      this.render100Squarez()
    )
  }

  render100Squarez() {
    var elements = [];
    for (let i = 0; i < 11; i++) {
      elements.push([]);
      for (let j = 0; j < 11; j++) {
        elements[i].push({ x: i, y: j });
      }
    }
    return (
      <div className="board">
        <h2>Next player: {this.state.currentPlayer}</h2>
        {
          elements.map((element, indexX) => {
            return (
              <div className="square-row" key={indexX}>
                {
                  element.map((square, indexY) => {
                    return <Square key={indexY}
                      apexA={{ x: indexY, y: indexX, marked: null }}
                      onClick={this.changeNextPlayerAndSetLastApex}
                      currentPlayer={this.state.currentPlayer}
                      lastClickedApex={this.state.lastSelectedApex} />
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default Board;