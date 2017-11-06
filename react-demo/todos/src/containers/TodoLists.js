import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function propMap(state) {
    return {
        todos: state.todos
    };
}
class TodoLists extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {todos} = this.props;
        const _list = todos.todoLists;
        const todoItems = _list.map((_list) =>
            <li key={_list.id}>
                {_list.value}
            </li>
        );
        return(
            <ul>
                {todoItems}
            </ul>
        )
    }
}

export default connect(propMap)(TodoLists)