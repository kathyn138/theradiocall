import React from 'react';
import Start from './Start';
import ReactGA from 'react-ga';
import './App.css';

ReactGA.initialize('G-X39GNBV064');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      start: true
    });
  }

  render() {
    let defaultMessage =
      <div className="landing">
        <div className="pentagram">
          <div className="base">
            <div className="circle"></div>
            <div className="bar n0"><li></li></div>
            <div className="bar n1"><li></li></div>
            <div className="bar n2"><li></li></div>
            <div className="bar n3"><li></li></div>
            <div className="bar n4"><li></li></div>
            <div className="overbar n0"><li></li></div>
            <div className="overbar n1"><li></li></div>
            <div className="overbar n2"><li></li></div>
            <div className="overbar n3"><li></li></div>
            <div className="overbar n4"><li></li></div>
          </div>
        </div>
        <div className="landing-text">
          <p>
            This is a safe space for one to use to summon a powerful entity
              that can grant any wish.</p>
          <p>
            Would you like to proceed?
            </p>
          <button className="btn proceed-btn" onClick={this.handleClick}>Yes</button>
        </div>
      </div>

    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 text-center">
            {this.state.start ? <Start /> : defaultMessage}
          </div>
        </div>
      </div>
    )
  }
}

export default App;