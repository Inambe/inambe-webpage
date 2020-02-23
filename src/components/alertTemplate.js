import React from "react";
import "./alertTemplate.css";

function AlertTemplate({ style, options, message, close }) {
	return (
		<div style={style} className="alertTemp">
			{message} &nbsp; <span onClick={close}>❌</span>
		</div>
	);
}

export default AlertTemplate;
