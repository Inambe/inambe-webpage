import React from "react";
import "./input.css";

function Input({ textarea, ...props }) {
	if (textarea)
		return <textarea className="input input--textarea" {...props} />;

	return <input className="input" {...props} />;
}

export default Input;
