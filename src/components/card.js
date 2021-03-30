import React from "react"
import clsx from "clsx"

function Card({
	className,
	noPadding,
	noShadow,
	border,
	Component = "div",
	...props
}) {
	return (
		<Component
			className={clsx(
				"bg-white",
				!noPadding && "p-4",
				!noShadow && "shadow-sm",
				border && "border",
				className
			)}
			{...props}
		/>
	)
}

export default Card
