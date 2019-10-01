import React from "react";

class Follower extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div key={this.props.id}>
        <p>Username: {this.props.login}</p>
        <img src={this.props.image} alt={this.props.name} /> 
      </div>
    );
  }
}

export default Follower;
