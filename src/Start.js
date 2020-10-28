import React from 'react';
import Deal from './Deal';
import './Start.css';
import alastorTune from './assets/alastortune.wav';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.bgMusic = new Audio(alastorTune);
    this.bgMusic.play();
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      deal: true
    });
    this.bgMusic.pause();
  }

  render() {
    let startMessage =
      <div className="start-text">
        <p className="l1">I see that you have something that you strongly desire.</p>
        <p className="l2">There are no limits to my powers. I can grant any wish.</p>
        <p className="l3">In exchange, I only seek your soul upon your death.</p>
        <p className="l4">Do we have a deal?</p>
        <button className="btn deal-btn" onClick={this.handleClick}>Yes</button>
      </div>;
    return (
      this.state.deal ? <Deal /> : startMessage
    );
  }
}

export default Start;