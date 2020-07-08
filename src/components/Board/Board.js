import React from 'react';
import './Board.scss';
import Square from '../Square/Square';

class Board extends React.Component {
  state = {};


  render() {
    return (
      (this.render100Squarez())
    )
  }

  render100Squarez() {
    var elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push([]);
      for (let j = 0; j < 10; j++) {
        elements.push(j);
      }
    }
    
    return (
      <div >
        {
        elements.map(element => {
          console.log(element)
          return <Square />
        })
        }
      </div>
    )
  }
}

export default Board;

