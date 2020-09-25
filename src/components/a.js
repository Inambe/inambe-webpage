import React from "react"
import { Link } from "gatsby"
import "./a.css"

function A({ newTab, children, eLink, noStyle, ...props }) {
	let customProps = {}
	customProps.className = noStyle ? null : "a"
	customProps.target = newTab ? "_blank" : undefined
	return eLink ? (
		<a rel="noopener noreferrer" {...customProps} {...props}>
			{children}
		</a>
	) : (
		<Link {...customProps} {...props}>
			{children}
		</Link>
	)
}

export default A
