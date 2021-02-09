import React from "react"
import clsx from "clsx"

function PostHeading({ className, ...props }) {
	return (
		// eslint-disable-next-line jsx-a11y/heading-has-content
		<h2
			className={clsx(
				"text-5xl font-black text-primary leading-tight",
				className
			)}
			{...props}
		/>
	)
}

export default PostHeading
