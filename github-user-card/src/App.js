import React from "react";
import "./App.css";
import User from "./components/User";
import FollowersList from "./components/FollowersList";
import axios from "axios";

const userApi = "https://api.github.com/users/Ziggyss";
const followersApi = "https://api.github.com/users/Ziggyss/followers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        login: "",
        name: "",
        id: "",
        bio: "",
        avatar_url: ""
      },
      followers: []
    };
  }

  componentDidMount() {
    this.userPromise = axios.get(userApi);
    this.followersPromise = axios.get(followersApi);
    Promise.all([this.userPromise, this.followersPromise])
      .then(([userAxiosResponse, followersAxiosResponse]) => {
        this.setState({
          user: userAxiosResponse.data,
          followers: followersAxiosResponse.data
        });
      })

      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <User user={this.state.user} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
