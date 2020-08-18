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
    lastSelectedApex: null,
    currentClickedApex: null
  };

  changeNextPlayerAndSetLastApex = (clickedApex) => {
    let tempState = this.state;
    tempState.lastSelectedApex = tempState.currentClickedApex;
    tempState.currentClickedApex = clickedApex;
    tempState.currentPlayer = this.state.currentPlayer === players.BLUE ? players.RED : players.BLUE;
    this.setState(tempState);
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
                      currentClickedApex={this.state.currentClickedApex}
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

  render() {
    return (
      this.render100Squarez()
    )
  }
}


export default Board;