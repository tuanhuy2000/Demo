import React from "react";

class MyComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { jobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jobs-list">
              {jobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.id}-{item.title}
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
