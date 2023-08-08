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

  deleteJob = (job) => {
    let curentJob = this.state.arr;
    curentJob = curentJob.filter((item) => item.id !== job.id);
    this.setState({
      arr: curentJob,
    });
  };

  render() {
    console.log("re-render");
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <MyComponent jobs={this.state.arr} deleteJob={this.deleteJob} />
      </>
    );
  }
}
export default FormComponent;
