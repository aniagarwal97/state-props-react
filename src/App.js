import React, { Component } from 'react';
import Circle from './Circle';
import Text from './Text';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleonEnter = () => {
    this.setState({
      text: "ABC"
    });
  }

  handleonLeave = () => {
    this.setState({
      text: "DEF"
    });
  }

  render() {
    return (
      <div>
        <Circle
          abc={this.state.text}
          handleonEnter={this.handleonEnter}
          handleonLeave={this.handleonLeave}>
        </Circle>
        <Text
          def={this.state.text}>
        </Text>
      </div>
    );
  }
}

export default App;
