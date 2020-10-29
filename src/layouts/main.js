import React from "react"
import { useAlert } from "react-alert"

import Header from "../components/header"
import Container from "../components/container"
import { isBrowser } from "../api/runtime"

function MainLayout({ children }) {
	const alert = useAlert()
	if (isBrowser() && !localStorage.getItem("show-alert")) {
		setTimeout(() => {
			alert.show(
				<>
					📢 Looking for a nice <i>full-time</i> job
				</>
			)
		}, 2000)
	}

	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	)
}

export default MainLayout
