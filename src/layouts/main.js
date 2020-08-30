import React from "react"
import { useAlert } from "react-alert"

import Header from "../components/header"
import Container from "../components/container"
import AccentOverlay from "../components/accentOverlay"

function MainLayout({ children }) {
	const alert = useAlert()

	setTimeout(() => {
		alert.show(
			<>
				📢 Looking for a nice <i>full-time</i> job
			</>
		)
	}, 2000)

	return (
		<>
			<AccentOverlay />
			<Header />
			<Container>{children}</Container>
		</>
	)
}

export default MainLayout
