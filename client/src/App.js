import React, { useDebugValue } from 'react';
import './style.scss'

let i = 0;

class App extends React.Component {

  state = {
    data: []
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
      <main>
       <ol class="gradient-list">  
          {this.state.data.map((value, i) =>
            <li key={i}>
              <ul class="list-group"> 
                <li class="list-group-item list-group-item-primary">idVendor is: {value.deviceDescriptor.idVendor}</li>
                <li class="list-group-item list-group-item-secondary">idProduct is: {value.deviceDescriptor.idProduct}</li>
                <li class="list-group-item list-group-item-success">parent is: {value.parent}</li>
              </ul>
            </li>
          )}
        </ol>
        </main>
        {/* {this.state.data} */}
      </>

    );
  }
}

export default App;
