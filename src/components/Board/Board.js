import React from 'react';
import './Board.scss';
import Square from '../Square/Square';

class Board extends React.Component {
  state = {};


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
        {
          elements.map((element, indexX) => {
            return (
              <div className="square-row" key={indexX}>
                {
                  element.map((square, indexY) => {
                    return <Square key={indexY}
                      apexA={{ x: indexY, y: indexX }}
                      apexB={{ x: indexY + 1, y: indexX }}
                      apexC={{ x: indexY, y: indexX + 1 }}
                      apexD={{ x: indexY + 1, y: indexX + 1 }} />
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