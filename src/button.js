import React from "react";
import classnames from "classnames";
import "./button.css";

function Button({ className, ...props }) {
	const classNames = classnames("button", className);
	return <button className={classNames} {...props}></button>;
}

export default Button;
