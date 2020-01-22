import React from "react";
import classNames from "classnames";
import "./input.css";

function Input({ textarea, block, ...props }) {
	let className = classNames("input", {
		"input--textarea": textarea,
		"input--block": block
	});
	if (textarea) return <textarea className={className} {...props} />;

	return <input className={className} {...props} />;
}

export default Input;
