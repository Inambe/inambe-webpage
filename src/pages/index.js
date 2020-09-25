import React from "react"

import Hero from "../components/hero"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"

function Home() {
	return (
		<LayoutRoot>
			<SEO title="Home" />
			<MainLayout>
				<Hero />
			</MainLayout>
		</LayoutRoot>
	)
}

export default Home
