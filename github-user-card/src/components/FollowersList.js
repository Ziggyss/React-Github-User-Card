import React from "react";
import Follower from "./Follower";

class FollowersList extends React.Component {
  render() {
    return this.state.followers.map(follower => (
      <FollowersList
        key={follower.id}
        image={follower.avatar_url}
        name={follower.name}
        login={follower.login}
      />
    ));
  }
}

export default Follower;
