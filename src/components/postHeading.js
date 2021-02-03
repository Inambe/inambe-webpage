import React from "react"
import clsx from "clsx"

function PostHeading({ className, ...props }) {
	return (
		// eslint-disable-next-line jsx-a11y/heading-has-content
		<h2 className={clsx("text-2xl font-extrabold", className)} {...props} />
	)
}

export default PostHeading
