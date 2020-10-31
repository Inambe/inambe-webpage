import React from "react"
import classNames from "classnames"

function Input({ textarea, block, ...props }) {
	let className = classNames(
		"p-2 border-2 border-gray-300 rounded focus:border-gray-400 w-full"
	)
	if (textarea) return <textarea className={className} {...props} />

	return <input className={className} {...props} />
}

export default Input
