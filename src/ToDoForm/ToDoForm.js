import React, { Component } from "react";
import ToDoList from "../ToDoList/ToDoList";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      todoArray: [],
      input: "",
    };
  }

  updateInput = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todoArray: [...this.state.todoArray, this.state.input],
      input: "",
    });
  };

  render() {
    const { todoArray, input } = this.state;
    return (
      <div>
        <form>
          <label>New Todo</label>
          <input type="text" onChange={this.updateInput} value={input} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        <ToDoList todoArray={todoArray} />
      </div>
    );
  }
}

export default ToDoForm;
