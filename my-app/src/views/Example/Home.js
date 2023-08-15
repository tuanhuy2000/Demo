import React from "react";
import { withRouter } from "react-router";
import logo from "../../assets/images/Untitled.png";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 15000);
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.createUserRedux();
  };

  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Hello</div>
        <div>
          <img src={logo} alt="fail" />
        </div>
        <div>
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}> x </span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE USER",
        payload: userDelete,
      }),
    createUserRedux: () =>
      dispatch({
        type: "CREATE USER",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
