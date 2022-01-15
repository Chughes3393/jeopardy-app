import React, { Component } from 'react';

import TriviaInfo from './components/TriviaInfo'

class App extends Component {

  state = {
    triviaInfo: {},
    toggle: false,
    score: 0
  }

  componentDidMount() {
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ triviaInfo: data[0] }))
      .catch(error => console.error(error))
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ triviaInfo: data[0] }))
      .catch(error => console.error(error))

  }

  handleAdd = e => {
    // console.log('add', this.state.score)
    this.setState({ score: this.state.score + 1 })

  }

  handleSubtract = e => {
    // console.log('subtract')
    this.setState({ score: this.state.score - 1 })
  }

  render() {
    // console.log(this.state.score)
    return (
      <div className="container">
<div className="cont-less">

        <header><h1 id="header">Welcome To Jeopardy!</h1></header>

        <div id='triv-info'>
        <TriviaInfo triviaInfo={this.state.triviaInfo} />
        

        <button type='submit' onClick={this.handleSubmit}>Click for Question</button>

        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>Want To See The Answer?</button>
        {
          this.state.toggle ? <h4>Answer: {this.state.triviaInfo.answer}</h4> : null
        }
</div>

<div id='score-info'>
        <h2>Score:{this.state.score}</h2>

        <button onClick={this.handleAdd}>Add Points</button>

        <button onClick={this.handleSubtract}>Subtract Points</button>

        <button>Reset</button>
        </div>


        </div>
      </div>
    );
  }
}




export default App;
