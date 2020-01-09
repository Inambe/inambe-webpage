import React from "react";
import "./a.css";

function A({ newTab, children, ...props }) {
	let customProps = {};
	customProps.target = newTab ? "_blank" : undefined;
	return (
		<a className="a" {...customProps} {...props}>
			{children}
		</a>
	);
}

export default A;
