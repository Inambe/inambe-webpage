import React from "react"
import { Helmet } from "react-helmet"

import Container from "./../container"
import BlogHeader from "./header"

function BlogLayout({ children }) {
	return (
		<>
			<Helmet bodyAttributes={{ class: "blog" }} />
			<BlogHeader />
			<Container main>{children}</Container>
		</>
	)
}

export default BlogLayout
