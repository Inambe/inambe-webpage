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
				"rounded bg-white",
				!noPadding && "p-4",
				!noShadow && "shadow",
				border && "border",
				className
			)}
			{...props}
		/>
	)
}

export default Card
