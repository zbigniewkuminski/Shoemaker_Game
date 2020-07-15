import React from 'react';
import './Square.scss';

class Square extends React.Component {
  state = {};


  render() {
    console.log(this.props)
    return (
      <div className="square">
        <div className="button-row button-row-start">
          <div className="apex" onClick={() => { this.test(this.props.apexA) }}></div>
          <div className="apex" onClick={() => { this.test(this.props.apexB) }}></div>
        </div>
        <div className="button-row button-row-end">
          <div className="apex" onClick={() => { this.test(this.props.apexC) }}></div>
          <div className="apex" onClick={() => { this.test(this.props.apexD) }}></div>
        </div>
      </div>
    )
  }

  test = (apex) => {
    console.log('tes')
    console.log(apex)
  }
}

export default Square;
