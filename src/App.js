import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    text: "enter date",
    error: "error"
  }

    handleDateChange = (e) => {
      const value = e.target.value;
      fetch(`http://numbersapi.com/${value}/year?json`)
      .then(res => {
        if(res.ok) {
          return res
        }
        throw Error(res.status)
      })
      .then(res => res.json())
      .then(data => this.setState({
        text: "In this year: " + data.text
      }))
      .catch(err => {
        this.setState({text: "There is a problem " + err})
      })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleDateChange} type="text"/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
