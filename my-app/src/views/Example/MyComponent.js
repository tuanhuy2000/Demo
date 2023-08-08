import React from "react";
import "./Demo.scss";

class MyComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { jobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="jobs-list">
              {jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.id}-{item.title}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      {" "}
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const MyComponent = (props) => {
//   let { age, name, jobs } = props;
//   return (
//     <>
//       <div>
//         name: {name} - age: {age}
//       </div>
//       <div className="jobs-list">
//         {jobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.id}-{item.title}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default MyComponent;
