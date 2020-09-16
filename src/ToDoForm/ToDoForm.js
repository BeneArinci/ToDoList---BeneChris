import React, { Component } from "react";

class ToDoForm extends Component {
  render() {
    return (
      <form>
        <label>New Todo</label>
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ToDoForm;
