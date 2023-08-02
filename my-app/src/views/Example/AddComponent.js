import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    id: "",
  };
  handleOnChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChangeId = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handleClickButton = (event) => {
    if (!this.state.id || !this.state.title) {
      alert("missing value");
      return;
    }
    this.props.addNewJob({ id: this.state.id, title: this.state.title });
    this.setState({
      title: "",
      id: "",
    });
  };

  render() {
    return (
      <>
        <div>hello add component</div>
        <form>
          <label htmlFor="fname">Job Title: </label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Id: </label>
          <br />
          <input
            type="text"
            value={this.state.id}
            onChange={(event) => this.handleOnChangeId(event)}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleClickButton()}
          />
        </form>
      </>
    );
  }
}
export default AddComponent;
