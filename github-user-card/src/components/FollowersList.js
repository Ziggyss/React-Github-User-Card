import React from "react";
import Follower from "./Follower";

class FollowersList extends React.Component {
  render() {
    return this.props.followers.map(follower => (
      <Follower
        key={follower.id}
        image={follower.avatar_url}
        login={follower.login}
      />
    ));
  }
}

export default FollowersList;
