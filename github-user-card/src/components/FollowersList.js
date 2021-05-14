import React from "react";
import Follower from "./Follower";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-evenly;
`;

const Styledh2 = styled.h2`
  font-size: 30px;
  text-align: center;
`;

class FollowersList extends React.Component {
  render() {
    return (
      <div>
        <Styledh2>Followers:</Styledh2>
        <StyledDiv>
          {this.props.followers.map(follower => (
            <Follower
              key={follower.id}
              image={follower.avatar_url}
              login={follower.login}
            />
          ))}
        </StyledDiv>
      </div>
    );
  }
}

export default FollowersList;
