import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

import Container from "./../container"
import A from "../a"

const NavLink = props => {
	return <A className="no-underline" {...props} />
}

function BlogHeader() {
	const data = useStaticQuery(graphql`
		{
			contentfulBlog {
				title
			}
		}
	`)
	const title = data.contentfulBlog.title

	return (
		<header className="py-4">
			<Container>
				<div className="flex justify-between items-center">
					<A to="/blog/" className="no-underline text-3xl font-black">
						{title}
					</A>
					<nav>
						<NavLink to="/">
							inambe.dev <FaArrowRight />
						</NavLink>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default BlogHeader
