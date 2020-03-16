import React from "react";
import "./accentOverlay.css";

import useAccentOverlay from "../hooks/useAccentOverlay";

function AccentOverlay() {
	const { ballIcons } = useAccentOverlay();

	return <div className="accentOverlay">{ballIcons}</div>;
}

export default AccentOverlay;
