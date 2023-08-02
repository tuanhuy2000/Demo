import React from "react";
import MyComponent from "./MyComponent";
import AddComponent from "./AddComponent";

class FormComponent extends React.Component {
  state = {
    arr: [
      { id: "1", title: "aaa" },
      { id: "2", title: "bbb" },
      { id: "3", title: "ccc" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arr: [...this.state.arr, job],
    });
  };

  render() {
    console.log("re-render");
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <MyComponent jobs={this.state.arr} />
      </>
    );
  }
}
export default FormComponent;
