import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppProvider } from "./utilities/Context";
import App from "./App";
import { pageWithBackground } from "./components/HOC/PageWithBackground";
const AppWithBG = pageWithBackground(App);

ReactDOM.render(
  <AppProvider>
    <AppWithBG />
  </AppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
