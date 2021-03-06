import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';

// 랜덤 색상 정하기
function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// function App() {
class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
      <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }
}

export default App;