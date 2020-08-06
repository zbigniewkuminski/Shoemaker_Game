import React from 'react';
import './Square.scss';

class Square extends React.Component {
  state = {
    apexA: this.props.apexA,
    edgeAB: null,
    edgeBD: null,
    edgeDC: null,
    edgeCA: null
  };

  render() {
    const borderStyle = '2px solid ';
    return (
      <div className="square" style={{ borderTop: borderStyle + this.state.edgeAB, borderRight: borderStyle + this.state.edgeBD, borderBottom: borderStyle + this.state.edgeDC, borderLeft: borderStyle + this.state.edgeCA }}>
        <div className="button-row button-row-start">
          <div className={`apex ${this.state.apexA.marked}`} onClick={() => { this.apexMark(this.props.apexA, 'apexA') }}></div>
        </div>
        <div className="button-row button-row-end">
        </div>
      </div>
    )
  }

  prevState = () => {
    let tempState = this.state;
    tempState.apexA.marked = this.props.currentPlayer;
    return tempState;
  }

  apexMark = (apexValue, apexName) => {
    console.log(this.props.lastClickedApex)
    if (!this.state.apexA.marked && this.isApexClickable(apexValue)) {
      // console.log('YOU SHALL PASS')
      // switch (apexName) {
      //   case 'apexA':
      //     this.setState({ apexA: { x: apexValue.x, y: apexValue.y, marked: this.props.currentPlayer } });
      //     break;
      //   default:
      //     break;
      // }
      this.setState(this.prevState(), () => {
        this.props.onClick(this.state.apexA);
      });
    }
  }

  isApexClickable(newApexValue) {
    if (this.props.lastClickedApex === null) {
      console.log('pierwsze kliknięcie')
      return true;
    }
    if ((this.props.lastClickedApex.x === newApexValue.x + 1 || this.props.lastClickedApex.x === newApexValue.x - 1) && this.props.lastClickedApex.y === newApexValue.y) {
      if (this.props.lastClickedApex.x) {
        this.setState({ edgeCA: this.props.currentPlayer });
      } else {
        this.setState({ edgeAB: this.props.currentPlayer });
      }
      return true;
    }
    if ((this.props.lastClickedApex.y === newApexValue.y + 1 || this.props.lastClickedApex.y === newApexValue.y - 1) && this.props.lastClickedApex.x === newApexValue.x) {
      if (newApexValue.x === this.props.lastClickedApex.x) {
        this.setState({ edgeCA: this.props.currentPlayer });
      } else {
        this.setState({ edgeAB: this.props.currentPlayer });
      }
      return true;
    }
    return false;
  }
}

export default Square;
