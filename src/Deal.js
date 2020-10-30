import React from 'react';
import './Deal.css';
import creepySfx from './assets/creepysfx.wav';
import alastorGreet from './assets/alastorgreet.wav';

class Deal extends React.Component {

  componentDidMount() {
    this.creepySfx = new Audio(creepySfx);
    this.creepySfx.play();
    this.alastorGreeting = new Audio(alastorGreet);

    this.playAlastorGreeting = setTimeout(() => this.alastorGreeting.play(), 3500);
  }

  componentWillUnmount() {
    clearInterval(this.playAlastorGreeting);
  }


  render() {
    return (
      <React.Fragment>
        <div className="cursor-cover">ok</div>
        <div className="deal-text">
          <h1>∰ ⊰ ⍕ ﹋</h1>
          <h1>∰ ⊰ ⍕ ﹋</h1>
          <h1>∰ ⊰ ⍕ ﹋</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default Deal;