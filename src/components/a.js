import React from "react";
import { Link } from "react-router-dom";
import "./a.css";

function A({ newTab, children, rrLink, noStyle, ...props }) {
	let customProps = {};
	customProps.className = noStyle ? null : "a";
	customProps.target = newTab ? "_blank" : undefined;
	return rrLink ? (
		<Link {...customProps} {...props}>
			{children}
		</Link>
	) : (
		<a {...customProps} {...props}>
			{children}
		</a>
	);
}

export default A;
