import React from 'react';
import './Deal.css';
import creepySfx from './assets/creepysfx.wav';

class Deal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.creepySfx = new Audio(creepySfx);
    this.creepySfx.play();
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