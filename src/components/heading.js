import React from "react"

function Heading(props) {
	return (
		// eslint-disable-next-line jsx-a11y/heading-has-content
		<h1
			className="text-5xl text-primary font-extrabold mb-3 leading-none"
			{...props}
		/>
	)
}

export default Heading
