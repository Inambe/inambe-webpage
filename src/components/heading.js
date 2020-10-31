import React from "react"

function Heading(props) {
	return (
		// eslint-disable-next-line jsx-a11y/heading-has-content
		<h1 className="text-4xl text-primary font-extrabold mb-3" {...props} />
	)
}

export default Heading
