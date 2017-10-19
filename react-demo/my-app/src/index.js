import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './components/Counter'
import './index.css';
import {App,Tick} from './App';
import counter from './reducers'
// import registerServiceWorker from './registerServiceWorker';

/**
 * Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
 * Redux 提供createStore这个函数，用来生成 Store。
 */
const store = createStore(counter)
const rootEl = document.getElementById('root')
/**
 * Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
 * 
 * store.dispatch()是 View 发出 Action 的唯一方法。
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
 */

/**
 * Action 就是 View 发出的通知，表示 State 应该要发生变化了。
 * Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。
 * Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
 */

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
