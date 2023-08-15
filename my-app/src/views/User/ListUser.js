import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      this.setState({
        listUser: res && res.data && res.data.data ? res.data.data : [],
      });
    });
  }

  handleViewDetail = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { listUser } = this.state;
    return (
      <div className="list-todo-container">
        <div className="title">List User</div>
        <div className="list-todo-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  className="todo-child"
                  key={item.id}
                  onClick={() => this.handleViewDetail(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
