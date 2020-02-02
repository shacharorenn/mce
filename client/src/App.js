import React from 'react';
import './App.css';

let i = 0;

class App extends React.Component {

  state = {
    data: {array: []}
  }

  componentWillMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
  }

  render() {
    let res = null;
    i++;
    console.log('render', i);
    return (
      <>
        <ul>
          {this.state.data.array.map((value, i) =>
            <li key={i}>{value}</li>)}
        </ul>
        {this.state.data.array}
      </>

    );
  }
}

export default App;
