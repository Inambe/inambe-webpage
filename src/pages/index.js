import React from "react"

import Hero from "../components/hero"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"

function Home() {
	return (
		<LayoutRoot>
			<MainLayout>
				<Hero />
			</MainLayout>
		</LayoutRoot>
	)
}

export default Home
