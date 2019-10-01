import React from "react";
import "./App.css";
import User from "./components/User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        login: "",
        name: "",
        id: "",
        bio: "",
        followers: []
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <User
          key={this.props.id}
          login={this.props.login}
          bio={this.props.bio}
          name={this.props.name}
        />
      </div>
    );
  }
}

export default App;
