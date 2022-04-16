import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    //Super calls constructor method on the component class
    super();
    this.state = {
      string: "Hello World of state."
    }
  }
  render () {
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.state.string}
            </p>
            <button onClick = { () => this.setState({
              string: "You changed me onclick."
              })
            } >
              Change Text
            </button>
          </header>
        </div>
      );
  }
}

export default App;
