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
    for (let i = 0; i < 11; i++) {
      elements.push([]);
      for (let j = 0; j < 11; j++) {
        elements[i].push({ x: i, y: j });
      }
    }
    console.log(elements)

    return (
      <div className="board">
        {
          elements.map(element => {
            return (
              <div className = "square-row">
                {
                  element.map(apex => {
                    return <Square />
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