import React, { Component } from 'react';
import Form from './Form/Form'
import './App.css'
class App extends Component {

  state = {
    isAna: undefined
  }

  isAna = () => {
    fetch(`https://isanaapi.herokuapp.com/api/isana/${document.getElementById('str1').value}/${document.getElementById('str2').value}`)
      .then(res => {
        res.json().then(data => {
          this.setState({ isAna: data.isAna })
        })
      })
  }
  render() {
    return (
      <div className='center'>
        <h1>Pass a word into each input and click check to see if they are Anagrams</h1>
        <Form check={this.isAna} />
        {this.state.isAna === undefined ? null : <h1>{this.state.isAna.toString()}</h1>}
      </div>
    )
  }
}

export default App;
