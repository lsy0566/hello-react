import React, { Component } from 'react';
import MyComponent from './MyComponent';  // MyComponent 파일을 불러온다.

// function App() {
class App extends Component {
  render() {
    return (
      <MyComponent name = "React" age={4}/>
    );
  }
}

export default App;