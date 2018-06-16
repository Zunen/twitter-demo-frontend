import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
