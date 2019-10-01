import React from "react";

class User extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <h2>User: {this.props.login}</h2>
        <p>Name: {this.props.name}</p>
        <p>Bio: {this.props.bio}</p>
      </div>
    );
  }
}

export default User;
