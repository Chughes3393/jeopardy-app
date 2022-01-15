import React, { Component } from 'react';

import TriviaInfo from './components/TriviaInfo'

import ScoreInfo from './components/ScoreInfo';

class App extends Component {

  state = {
    triviaInfo: {},
    toggle: false
  }

componentDidMount() {
    fetch('http://jservice.io/api/random')
    .then(response => response.json())
    .then(data => this.setState({triviaInfo: data[0]}))
    .catch(error => console.error(error))
  }

  handleSubmit = e => {
    e.preventDefault ()
    fetch('http://jservice.io/api/random')
    .then(response => response.json())
    .then(data => this.setState({triviaInfo: data[0]}))
    .catch(error => console.error(error))

  }

  render() {
    return (
      <div>

        <h1>Welcome To Jeopardy!</h1>
        <TriviaInfo triviaInfo = {this.state.triviaInfo} />

        <button type='submit' onClick={this.handleSubmit}>Click for Question</button>

        <button onClick={() => this.setState({toggle: !this.state.toggle})}>Want To See The Answer?</button>
        {
          this.state.toggle ? <h4>Answer: {this.state.triviaInfo.answer}</h4> : null
        }

<ScoreInfo />

      </div>
    );
  }
}

export default App;
