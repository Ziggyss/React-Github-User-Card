import React from "react";
import 'styled-components';



class Follower extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div key={this.props.id}>
        <h2>Username: {this.props.login}</h2>
        <img src={this.props.image} alt={this.props.name} /> 
      </div>
    );
  }
}

export default Follower;
