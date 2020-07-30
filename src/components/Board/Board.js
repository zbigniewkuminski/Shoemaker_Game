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

  changeNextPlayerAndSetLastApex=(clickedApex)=> {
  this.setState({currentPlayer: this.state.currentPlayer === players.BLUE ? players.RED : players.BLUE});
  this.setState({lastSelectedApex: clickedApex });
  console.log(clickedApex)
    }


  state = {
    currentPlayer: this.pickStartingPlayer(),
    lastSelectedApex: null
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
                      apexA={{ x: indexY, y: indexX, marked: null }}
                      apexB={{ x: indexY + 1, y: indexX, marked: null }}
                      apexC={{ x: indexY, y: indexX + 1, marked: null }}
                      apexD={{ x: indexY + 1, y: indexX + 1, marked: null }}
                      onClick = {this.changeNextPlayerAndSetLastApex}
                      currentPlayer = {this.state.currentPlayer}
                      lastClickedApex = {this.state.lastSelectedApex}/>
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