import React from "react"

function Tag(props) {
	return (
		<span
			className="py-1 px-3 rounded font-medium mr-1 border"
			{...props}
		/>
	)
}

export default Tag
