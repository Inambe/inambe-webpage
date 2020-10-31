import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

function A({ newTab, children, eLink, noStyle, ...props }) {
	let customProps = {}
	customProps.className = noStyle
		? null
		: classNames(
				"transition duration-200 hover:text-primary underline flex items-center",
				props.className
		  )

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
