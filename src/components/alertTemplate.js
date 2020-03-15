import React from "react";
import "./alertTemplate.css";

function AlertTemplate({ style, options, message, close }) {
	return (
		<div style={style} className="alertTemp">
			{message} &nbsp;{" "}
			<span role="img" aria-label="close button" onClick={close}>
				❌
			</span>
		</div>
	);
}

export default AlertTemplate;
