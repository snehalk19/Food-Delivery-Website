import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  componentDidMount() {
    //console.log("Parent component did mount");
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>Welcome to about Page</h3>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

        <UserClass name={"Snehal Class"} location={"Pune class"} />
      </div>
    );
  }
}

export default About;
