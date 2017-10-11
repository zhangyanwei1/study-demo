import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Tick name="Zhang Yanwei"/>
        <Tick name="Zhang"/>
        <Tick name="Yanwei"/>
      </div>
    );
  }
}

export class Tick extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    }
  }
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello，{this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}