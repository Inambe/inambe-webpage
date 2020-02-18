import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import "./accentOverlay.css";

import useAccentOverlay from "../hooks/useAccentOverlay";

function AccentOverlay({ history }) {
	const { ballIcons, setRefresh } = useAccentOverlay();
	useEffect(() => {
		history.listen(() => {
			setRefresh(true);
		});
	}, []);

	return <div className="accentOverlay">{ballIcons}</div>;
}

export default withRouter(AccentOverlay);
