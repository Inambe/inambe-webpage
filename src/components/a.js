import React from "react"
import { Link } from "gatsby"

function A({ newTab, eLink, ...props }) {
	const Component = eLink ? "a" : Link
	let customProps = {}
	customProps.target = newTab ? "_blank" : undefined
	customProps.rel = eLink ? "noopener noreferrer" : undefined

	if (eLink) {
		delete props.activeClassName
		delete props.partiallyActive
	}

	return <Component {...customProps} {...props} />
}

export default A
