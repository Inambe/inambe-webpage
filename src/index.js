import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
	transitions,
	positions,
	Provider as AlertProvider,
	types
} from "react-alert";
import "./index.css";

import App from "./App";
import AlertTemplate from "./components/alertTemplate";

const options = {
	position: positions.BOTTOM_RIGHT,
	timeout: 0,
	offset: "20px",
	transition: transitions.FADE
};

ReactDOM.render(
	<AlertProvider template={AlertTemplate} {...options}>
		<App />
	</AlertProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
