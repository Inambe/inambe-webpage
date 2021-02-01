import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

function A({ newTab, children, eLink, className, ...props }) {
	let customProps = {}
	customProps.className = clsx(className)
	customProps.target = newTab ? "_blank" : undefined

	return eLink ? (
		<a rel="noopener noreferrer" {...props} {...customProps}>
			{children}
		</a>
	) : (
		<Link {...props} {...customProps}>
			{children}
		</Link>
	)
}

export default A
