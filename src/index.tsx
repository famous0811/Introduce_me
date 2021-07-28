import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dotenv from "dotenv";
import "./styles/base.scss";
console.log(process.env.NODE_ENV);
dotenv.config();
ReactDOM.render(<App />, document.getElementById("root"));
