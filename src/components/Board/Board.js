import React from 'react';
import './Board.scss';
import Square from '../Square/Square';

const players = {
  BLUE: 'Blue',
  RED: 'Red'
}  

class Board extends React.Component {
  pickStartingPlayer = () => {
    if(Math.round(Math.random(0,1)) === 0){
      return players.BLUE;
    } else {
      return players.RED;
    }
  }

  state = {
    currentPlayer: this.pickStartingPlayer()
  };

  render() {
    return (
      this.render100Squarez()
    )
  }

  render100Squarez() {
    var elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push([]);
      for (let j = 0; j < 10; j++) {
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
                      apexA={{ x: indexY, y: indexX, marked: false }}
                      apexB={{ x: indexY + 1, y: indexX, marked: false }}
                      apexC={{ x: indexY, y: indexX + 1, marked: false }}
                      apexD={{ x: indexY + 1, y: indexX + 1, marked: false }} />
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