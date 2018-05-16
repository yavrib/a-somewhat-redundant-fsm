import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const states = [
  { from: 'S1', to: 'S2', transition: 'a' },
  { from: 'S2', to: 'S1', transition: 'b' },
  { from: 'S2', to: 'S2', transition: 'a' },
  { from: 'S2', to: 'S4', transition: 'c' },
  { from: 'S4', to: 'S3', transition: 'd' },
  { from: 'S3', to: 'S1', transition: 'a' },
  { from: 'S3', to: 'S4', transition: 'b' },
];

const functions = {
  a: (currentState) => console.log(currentState),
  b: (currentState) => console.log(currentState),
  c: (currentState) => console.log(currentState),
  d: (currentState) => console.log(currentState),
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'S1'
    }
  }

  render() {
    return (
      <div className="App">
        { states
            .filter(state => state.from == this.state.current)
            .map(currentState =>
              <div
                onClick={() => {
                  const fn = functions[currentState.transition]
                  if (fn) {
                    fn(this.state.current);
                  }
                  this.setState({ current: currentState.to })
                }}
              >
                { currentState.to }
              </div>)
            }
      </div>
    );
  }
}

export default App;
