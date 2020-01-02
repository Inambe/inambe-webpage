import React from "react";
import "./button.css";

function Button({ type, size, ...props }) {
	return (
		<button
			className={`btn ${type ? "btn--" + type : ""} ${
				size ? "btn--" + size : ""
			}`}
			{...props}
		/>
	);
}

export default Button;
