import React from 'react';
import './Square.scss';

class Square extends React.Component {
  state = {
    apexA: this.props.apexA,
    edgeAB: null, // TOP
    edgeBD: null, // RIGHT
    edgeDC: null, // BOTTOM
    edgeCA: null, // LEFT
    testValue: null,
    lastClickedApex: null,
    currentClickedApex: null
  };

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.apexA.x===0 && this.state.apexA.y===0) {
      console.log('prevCurrent', prevProps.currentClickedApex);
      console.log('prevLast', prevProps.lastClickedApex);
      console.log('propsCurrent', this.props.currentClickedApex);
      console.log('propsLast', this.props.lastClickedApex);
      console.log('thisStateLastClicked', this.state.lastClickedApex)
      console.log('===========================================')
    // }
    const { currentClickedApex, lastClickedApex } = this.props;
    if (JSON.stringify(prevProps.currentClickedApex) !== JSON.stringify(currentClickedApex)) { this.setState({ currentClickedApex }) }
    if (JSON.stringify(prevProps.lastClickedApex) !== JSON.stringify(lastClickedApex)) { this.setState({ lastClickedApex }) }
  }

  prevState = () => {
    let tempState = this.state;
    tempState.apexA.marked = this.props.currentPlayer;
    return tempState
  }

  apexMark = (apexValue, apexName) => {
    if (!this.state.apexA.marked && this.isApexClickable(apexValue)) {
      this.setState(this.prevState(), () => {
        this.props.onClick(this.state.apexA);
      });
    }
  }

  isApexClickable(newApexValue) {
    if (this.state.lastClickedApex === null) {
      console.log('pierwszy warunek')
      return true;
    }
    if ((this.state.currentClickedApex.x === newApexValue.x + 1 || this.state.currentClickedApex.x === newApexValue.x - 1) && this.state.currentClickedApex.y === newApexValue.y) {
      console.log('drugi warunek')
      // if (this.props.currentClickedApex.x) {
      if (this.state.currentClickedApex.x > newApexValue.x) { //linia  z prawej do lewej
        // this.setState({ edgeCA: this.props.currentPlayer });
      } else { //z lewej do prawej
        // this.setState({ edgeAB: this.props.currentPlayer });
      }
      return true;
    }
    if ((this.state.currentClickedApex.y === newApexValue.y + 1 || this.state.currentClickedApex.y === newApexValue.y - 1) && this.state.currentClickedApex.x === newApexValue.x) {
      console.log('trzeci warunek')
      // if (this.state.currentClickedApex.y) {
      if (this.state.currentClickedApex.y > newApexValue.y) { //linia z dolu z góry
        // this.setState({ edgeBD: this.state.currentPlayer });
      } else { //z góry do dołu
        this.setState({ edgeCA: this.props.currentPlayer });
      }
      return true;
    }
    console.log('Eluwina')
    return false;
  }

  render() {
    if (this.props.lastClickedApex && this.props.lastClickedApex.x === this.state.apexA.x && this.props.lastClickedApex.y === this.state.apexA.y) {
      // if (!this.state.edgeAB) {
      //   this.setState({ edgeAB: this.props.currentPlayer })
      // }
      // else if (!this.state.edgeBD) {
      //   this.setState({ edgeBD: this.props.currentPlayer })
      // }
      // else if (!this.state.edgeDC) {
      //   this.setState({ edgeDC: this.props.currentPlayer })
      // }
      // else if (!this.state.edgeCA) {
      //   this.setState({ edgeCA: this.props.currentPlayer })
      // }
    }
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
}
export default Square;
