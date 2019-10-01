import React from "react";

class Follower extends React.Component {
  render() {
    debugger
    return (
      <div key={this.props.id}>
        <h2>Followers:</h2>
        <p>Username: {this.props.followers.login}</p>
        {/* <img src={this.props.followers.avatar_url} alt={this.props.followers.name}></img> */}
      </div>
    );
  }
}

export default Follower;
