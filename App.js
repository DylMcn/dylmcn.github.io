import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>This is a React class component with only a render method.</p>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))


