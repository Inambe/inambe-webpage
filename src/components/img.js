import React from "react";
import "./img.css";

function Img({ className, ...props }) {
	return <img className={`img ${className ? className : ""}`} {...props} />;
}

export default Img;
