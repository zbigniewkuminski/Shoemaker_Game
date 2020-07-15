import React from 'react';
import './Square.scss';

class Square extends React.Component {
  state = {
    apexA: this.props.apexA,
    apexB: this.props.apexB,
    apexC: this.props.apexC,
    apexD: this.props.apexD
  };


  render() {

    // console.log(this.props)
    const isMarkedApexA = this.state.apexA.marked;
    const isMarkedApexB = this.state.apexB.marked;
    const isMarkedApexC = this.state.apexC.marked;
    const isMarkedApexD = this.state.apexD.marked;
    console.log(isMarkedApexA)
    return (
      <div className="square">
        <div className="button-row button-row-start">
          <div className={`apex ${isMarkedApexA ? 'marked' : ''}`} onClick={() => { this.apexMark(this.props.apexA, 'apexA') }}></div>
          <div className={`apex ${isMarkedApexB ? 'marked' : ''}`} onClick={() => { this.apexMark(this.props.apexB, 'apexB') }}></div>
        </div>
        <div className="button-row button-row-end">
          <div className={`apex ${isMarkedApexC ? 'marked' : ''}`} onClick={() => { this.apexMark(this.props.apexC, 'apexC') }}></div>
          <div className={`apex ${isMarkedApexD ? 'marked' : ''}`} onClick={() => { this.apexMark(this.props.apexD, 'apexD') }}></div>
        </div>
      </div>
    )
  }

  apexMark = (apexValue, apexName) => {
    switch (apexName) {
      case 'apexA':
        this.setState({ apexA: { x: apexValue.x, y: apexValue.y, marked: true } })
        break;
      case 'apexB':
        this.setState({ apexB: { x: apexValue.x, y: apexValue.y, marked: true } })
        break;
      case 'apexC':
        this.setState({ apexC: { x: apexValue.x, y: apexValue.y, marked: true } })
        break;
      case 'apexD':
        this.setState({ apexD: { x: apexValue.x, y: apexValue.y, marked: true } })
        break;
      default:
        break;
    }
  }
}

export default Square;
