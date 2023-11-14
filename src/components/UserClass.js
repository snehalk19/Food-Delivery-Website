import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //console.log("Child component did mount");
  }

  componentDidUpdate() {
    //console.log("Child component did update");
  }

  componentWillUnmount() {
    //console.log("Child component will unmount");
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <p>Count: {count}</p>
        <button
          onClick={() => {
            // Never update state variable directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact : snehal@123</h4>
      </div>
    );
  }
}

export default UserClass;
