import React, { Component } from "react";
import Header from "./Header.js";
import HeadPicture from "./HeadPicture";
import Statistics from "./Statistics";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeadPicture />
        <Statistics />
      </div>
    );
  }
}

export default App;
