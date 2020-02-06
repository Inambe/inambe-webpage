import React from "react";
import "./accentOverlay.css";

import useAccentOverlay from "../hooks/useAccentOverlay";

function AccentOverlay() {
	let BallIcons = useAccentOverlay();
	return <div className="accentOverlay">{BallIcons}</div>;
}

export default AccentOverlay;
