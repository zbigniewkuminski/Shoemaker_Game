import React from 'react';
import './Square.scss';

class Square extends React.Component {
  state = {
    apexA: this.props.apexA,
    apexB: this.props.apexB,
    apexC: this.props.apexC,
    apexD: this.props.apexD,
    edgeAB: null,
    edgeBD: null,
    edgeDC: null,
    edgeCA: null
  };


  render() {
    const isMarkedApexA = this.state.apexA.marked;
    const isMarkedApexB = this.state.apexB.marked;
    const isMarkedApexC = this.state.apexC.marked;
    const isMarkedApexD = this.state.apexD.marked;

    const borderStyle = '2px solid ';
    return (
      <div className="square" style={{ borderTop: borderStyle + this.state.edgeAB, borderRight: borderStyle + this.state.edgeBD, borderBottom: borderStyle + this.state.edgeDC, borderLeft: borderStyle + this.state.edgeCA }}>
        <div className="button-row button-row-start">
          <div className={`apex ${this.state.apexA.marked}`} onClick={() => { this.apexMark(this.props.apexA, 'apexA') }}></div>
          <div className={`apex ${this.state.apexB.marked}`} onClick={() => { this.apexMark(this.props.apexB, 'apexB') }}></div>
        </div>
        <div className="button-row button-row-end">
          <div className={`apex ${this.state.apexC.marked}`} onClick={() => { this.apexMark(this.props.apexC, 'apexC') }}></div>
          <div className={`apex ${this.state.apexD.marked}`} onClick={() => { this.apexMark(this.props.apexD, 'apexD') }}></div>
        </div>
      </div>
    )
  }

  apexMark = (apexValue, apexName) => {
    if (!this.state[apexName].marked && this.isApexClickable(apexValue)) {
      switch (apexName) {
        case 'apexA':
          this.setState({ apexA: { x: apexValue.x, y: apexValue.y, marked: this.props.currentPlayer } });
          break;
        case 'apexB':
          this.setState({ apexB: { x: apexValue.x, y: apexValue.y, marked: this.props.currentPlayer } });
          break;
        case 'apexC':
          this.setState({ apexC: { x: apexValue.x, y: apexValue.y, marked: this.props.currentPlayer } });
          break;
        case 'apexD':
          this.setState({ apexD: { x: apexValue.x, y: apexValue.y, marked: this.props.currentPlayer } });
          break;
        default:
          break;
      }
      this.props.onClick(apexValue);
    }
  }

  isApexClickable(newApexValue) {
    if (this.props.lastClickedApex === null) {
      return true;
    }
    if ((this.props.lastClickedApex.x === newApexValue.x + 1 || this.props.lastClickedApex.x === newApexValue.x - 1) && this.props.lastClickedApex.y === newApexValue.y) {
      return true;
    }
    if ((this.props.lastClickedApex.y === newApexValue.y + 1 || this.props.lastClickedApex.y === newApexValue.y - 1) && this.props.lastClickedApex.x === newApexValue.x) {
      return true;
    }
    return false;
  }
}

export default Square;
