import React from "react";
import "./img.css";

function Img({ className, alt, ...props }) {
	return (
		<img
			alt={alt}
			className={`img ${className ? className : ""}`}
			{...props}
		/>
	);
}

export default Img;
