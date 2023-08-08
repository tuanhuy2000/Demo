import React from "react";

class ChangeTodos extends React.Component {
  handleOnClickDelete = (todo) => {
    this.props.DeleteTodo(todo);
  };

  handleOnClickEdit = (todo) => {
    this.props.ChangeTodo(todo);
  };

  render() {
    let isEmptyObj = Object.keys(this.props.edit).length === 0;
    return (
      <>
        <button
          className="edit"
          onClick={() => this.handleOnClickEdit(this.props.todo)}
        >
          {isEmptyObj === false && this.props.edit.id === this.props.todo.id
            ? "Save"
            : "Edit"}
        </button>
        <button
          className="delete"
          onClick={() => this.handleOnClickDelete(this.props.todo)}
        >
          Delete
        </button>
      </>
    );
  }
}

export default ChangeTodos;
