import React from "react"

function Container({ main, ...props }) {
	return main ? (
		<main className="container mx-auto px-3 py-12" {...props} />
	) : (
		<div className="container mx-auto px-3" {...props} />
	)
}

export default Container
