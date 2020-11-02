import React from "react"

function Container({ main, ...props }) {
	return main ? (
		<main className="container mx-auto px-5 py-12" {...props} />
	) : (
		<div className="container mx-auto px-5" {...props} />
	)
}

export default Container
