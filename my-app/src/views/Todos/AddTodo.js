import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    todo: "",
  };

  handleOnChangeTodo = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleAddButton = (event) => {
    if (!this.state.todo) {
      toast.error("Missing value !!!");
      return;
    }
    this.props.AddNewTodo({
      id: Math.floor(Math.random() * 100),
      title: this.state.todo,
    });
    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.todo}
          onChange={(event) => this.handleOnChangeTodo(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddButton()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
