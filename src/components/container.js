import React from "react"

function Container({ main, ...props }) {
	return main ? (
		<main className="container mx-auto px-4 py-12" {...props} />
	) : (
		<div className="container mx-auto px-4" {...props} />
	)
}

export default Container
