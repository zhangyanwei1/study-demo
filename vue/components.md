## 组件学习
> 组件可以扩展 HTML 元素，封装可重用的代码。   

注意点：
### 1、data必须是函数
```
data:function(){
    return {
        data1:'',
        data2:''
    }
}
```
### 2、父子组件关系
> 在 Vue 中，父子组件的关系可以总结为 props down, events up。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。
#### 使用prop向子组件传递数据
组件的作用域是独立的 ，意味着不能使用父组件的数据，如果想使用父组件的数据。通过子组件的props选项。
```
props{
    prop1:'',
    prop2:''
}
```
父组件可以传递一个动态的数据到子组件，附加组件通过bind绑定props,当父组件传递的数据发生变化时，子组件接收的prop也会变化。
#### 自定义事件告诉父组件子组件的状态
子组件通过$emit(eventName) 触发事件   
父组件在使用子组件的地方通过$on(eventName) 监听事件
```
//父组件
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

//子组件
Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

```
在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on   
`<my-component v-on:click.native="doTheThing"></my-component>`
#### 单行数据流
> prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。        

>另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。

如果子组件想要把prop作为局部数据使用，请使用prop来初始化组件局部的data数据。
```
props: ['initialCounter'],
data: function () {
  return { 
        counter: this.initialCounter 
    }
}
```
<strong>注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。</strong>    

在子组件中可以为props添加验证，如果输入的类型不符合，Vue会发出警告。
```
props: {
    comboId: {
        type: String,
        required: true
    },
    remarkInfo: {
        type: Object,
        required: true
    }]
},
```
type:
+ String
+ Number
+ Boolean
+ Function
+ Object
+ Array
+ Symbol
#### 使用自定义输入事件的表单组件
v-model相当于如下自定义事件
```
<input
  v-bind:value="something1"
  v-on:input="inputSome">
  <span>{{something1}}</span>

methods:{
  inputSome:function(event){
    this.something1 = event.target.value;
  }
}
```
<a href="https://github.com/zhangyanwei1/study-demo/blob/master/vue/v-form.html" target="_blank">利用input自定义事件的组件demo</a>