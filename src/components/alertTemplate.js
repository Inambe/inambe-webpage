import React from "react"
import "./alertTemplate.css"

function AlertTemplate({ style, options, message, close }) {
	const onClose = () => {
		localStorage.setItem("show-alert", 0)
		close()
	}
	return (
		<div style={style} className="alertTemp">
			{message} &nbsp;{" "}
			<span role="img" aria-label="close button" onClick={onClose}>
				❌
			</span>
		</div>
	)
}

export default AlertTemplate
