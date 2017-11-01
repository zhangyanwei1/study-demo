import React, { Component } from 'react';
import '../style/App.css';

class App extends Component {
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

class Tick extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      on:true
    }
    //将调用时函数的上下文指定为这个类
    this.stopTime = this.stopTime.bind(this);
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

  //在构造函数中绑定this
  stopTime() {
    console.log('this is：',this);
  }
  
  //使用箭头函数绑定this
  handleClick = () => {
    this.setState((prevState) => ({
      on:!prevState.on
    }))
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello，{this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.handleClick.bind(this)}>{this.state.on ? 'on' : 'off'}</button>
      </div>
    )
  }
}

export default App