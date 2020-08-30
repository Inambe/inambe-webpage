import React from "react"
import "./../index.css"

import { transitions, positions, Provider as AlertProvider } from "react-alert"

import AlertTemplate from "./../components/alertTemplate"

const options = {
	position: positions.BOTTOM_RIGHT,
	timeout: 0,
	offset: "20px",
	transition: transitions.FADE,
}

function LayoutRoot({ children }) {
	return (
		<AlertProvider template={AlertTemplate} {...options}>
			{children}
		</AlertProvider>
	)
}

export default LayoutRoot
