import React, {Component} from 'react'
import AddTodo from '../containers/AddTodo'
import TodoLists from '../containers/TodoLists'

class App extends Component {
    render() {
        return(
            <div>
                <AddTodo />
                <TodoLists />
            </div>
        )
    }
}

export default App