import React, { Component } from 'react';

class TriviaInfo extends Component {
    render() {
        return (
            <div>
                <h3>Question: {this.props.triviaInfo.question}</h3>
                <h2>Category: {this.props.triviaInfo.category?.title}</h2>
                <h4>Points: {this.props.triviaInfo.value}</h4>
            </div>

        );
    }
}

export default TriviaInfo;
