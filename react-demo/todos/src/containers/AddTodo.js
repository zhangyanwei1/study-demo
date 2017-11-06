import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateInput, updateList } from '../action/addTodo'

function propMap(state) {
    return {
        todos: state.todos
    };
}
class AddTodo extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { todos, dispatch } = this.props;
        dispatch(updateList(todos.value));
        dispatch(updateInput({
            value:''
        }))
    }
    handleChange(e){
        const {dispatch} = this.props;
        let _value = e.target.value;
        //用户操作，触发Action
        dispatch(updateInput({
            value:_value
        }))
    }
    render() {
        const {todos} = this.props;
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={todos.value} onChange={this.handleChange.bind(this)} type="text"/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}

export default connect(propMap)(AddTodo)