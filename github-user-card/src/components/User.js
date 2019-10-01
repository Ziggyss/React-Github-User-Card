import React from "react";

class User extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <h2>User: {this.props.user.login}</h2>
        <p>Name: {this.props.user.name}</p>
        <p>Bio: {this.props.user.bio}</p>
      </div>
    );
  }
}

export default User;
