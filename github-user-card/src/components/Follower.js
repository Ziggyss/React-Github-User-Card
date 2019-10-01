import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <h2>Followers:</h2>
        <p>Username: {this.props.followers.login}</p>
        <p>Name: {this.props.followers.name}</p>
        <img src={this.props.followers.avatar_url} alt={this.props.followers.name}></img>
      </div>
    );
  }
}

export default Follower;
