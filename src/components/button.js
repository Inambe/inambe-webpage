import React from "react";
import classnames from "classnames";
import "./button.css";

function Button({ type, size, ...props }) {
	let className = classnames(
		"btn",
		type ? "btn--" + type : null,
		size ? "btn--" + size : null
	);
	return <button className={className} {...props} />;
}

export default Button;
