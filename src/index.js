import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      department: '',
      number: 0
    };
  }


  render() {
    return (
      <>
      <h3>Can you tell I'm hungry?</h3>
      <input type='text'></input>
      <select>
        <option value="meat">Meat</option>
        <option value="veggies">Veggies</option>
        <option value="fruit">Fruit</option>
        <option value="dairy">Dairy</option>
        <option value="grain">Grain</option>
      </select>
      <input type="number" name="quantity" min="1" max="20"></input>
      <button>Get that bread</button>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
