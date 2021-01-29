import React from "react"
import clsx from "clsx"

function Button({ type, size, ...props }) {
	return (
		<button
			className={clsx("py-2 px-4 rounded bg-primary text-white")}
			{...props}
		/>
	)
}

export default Button
