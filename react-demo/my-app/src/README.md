![Redux 工作流程](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

第一步：首先，用户发出`Action`
```
store.dispatch(action);
```
然后，`Store`自动调用`Reducer`，并且传入两个参数：当前`State`和收到的    `Action`，`Reducer`会返回新的`State`
```
let nextState = todoApp(previousState, action);
```
`State`一旦发生变化，`Store`就会调用监听函数。
```
//设置监听函数
store.subscribe(listener);
```
`listener`可以通过`store.getState`得到当前状态。如果使用的是React，这时可以触发重新渲染View。
```
function listener(){
    let newState = store.getState();
    component.setState(newState);
}
```