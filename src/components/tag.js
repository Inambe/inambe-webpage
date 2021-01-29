import React from "react"

function Tag(props) {
	return (
		<span
			className="py-1 px-3 text-sm rounded font-semibold shadow bg-white"
			{...props}
		/>
	)
}

export default Tag
