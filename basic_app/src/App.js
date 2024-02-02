import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: { firstname: 'ram', lastname: 'raghuvanshi' },
      comapany: 'la net',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>hi {this.state.name.firstname} ,{this.state.name.lastname}, I am work at {this.state.comapany}</p>
          <button onClick={() => {
            // this.state.name='sita';
            // console.log(this.state);
            this.setState(()=>
            {
                return {name: {firstname:'sitaji' , lastname:'janaknandini'}}
            },()=>{console.log(this.state);});
            

          }}>change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
