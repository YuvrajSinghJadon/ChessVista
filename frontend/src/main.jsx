import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL
socket.on("connect", () => {
  console.log("Connected to server");
});

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);