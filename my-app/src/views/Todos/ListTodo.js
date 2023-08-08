import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import ChangeTodos from "./ChangeTodos";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "1", title: "listen" },
      { id: "2", title: "say" },
      { id: "3", title: "walk" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Add Todo Success !!!");
  };

  deleteTodo = (todo) => {
    let curentTodos = this.state.listTodos;
    curentTodos = curentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: curentTodos,
    });
    toast.success("Delete Todo Success !!!");
  };

  changeTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //change
    if (!isEmptyObj && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let index = this.state.listTodos.findIndex(
        (obj) => obj.id === editTodo.id
      );
      listTodosCopy[index].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Change Todo Success !!!");
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEdit = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddTodo AddNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {" "}
                      {index + 1} - {item.id} - {item.title}{" "}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} - {editTodo.id} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) => this.handleOnChangeEdit(event)}
                          />
                        </span>
                      ) : (
                        <span>
                          {" "}
                          {index + 1} - {item.id} - {item.title}{" "}
                        </span>
                      )}
                    </>
                  )}
                  <ChangeTodos
                    DeleteTodo={this.deleteTodo}
                    ChangeTodo={this.changeTodo}
                    todo={item}
                    edit={editTodo}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
