// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: []
  };

  // TODO Render
  render() {
    return <div></div>;
  }

  // TODO componentDidMount with fetch
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(json => console.log(json));
  }
}

export default App;
