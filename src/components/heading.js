import React from "react"
import clsx from "clsx"

function Heading({ className, bare, ...props }) {
	return (
		// eslint-disable-next-line jsx-a11y/heading-has-content
		<h1
			className={clsx(
				"text-3xl md:text-4xl text-primary font-extrabold leading-none",
				!bare && "mb-6",
				className
			)}
			{...props}
		/>
	)
}

export default Heading
