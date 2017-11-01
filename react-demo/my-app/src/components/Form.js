import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            introduction:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const _target = event.target;
        const name = _target.name;
        const value = _target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert(this.state.username + ' , ' + this.state.introduction);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <label>
                    intr:
                    <textarea name="introduction" type="text" value={this.state.introduction} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form> 
        )
    }
}

export default NameForm