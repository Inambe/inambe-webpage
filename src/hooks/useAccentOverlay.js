import React, { useState, useEffect } from "react";
import BallIcon from "../components/svg/ballIcon";

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}

function makeRandomIcons() {
	const colors = ["orange", "green", "yellow", "purple"];
	let ballIconsTemp = [];

	for (let i = 0; i < 15; i++) {
		let height = getRandomNum(20, 100);
		let color = colors[Math.floor(getRandomNum(0, colors.length))];
		let top = Math.round(
			getRandomNum(0, document.documentElement.scrollHeight - height)
		);
		let left = Math.round(getRandomNum(0, window.innerWidth));
		let opacity = getRandomNum(0.1, 0.5).toFixed(1);

		ballIconsTemp.push(
			<BallIcon
				key={i}
				style={{
					top,
					left,
					opacity,
					height,
					color,
					transition: "all 4s"
				}}
			/>
		);
	}

	return ballIconsTemp;
}

function useAccentOverlay() {
	let [BallIcons, setBallIcons] = useState([]);
	useEffect(() => {
		setBallIcons(makeRandomIcons());
		let intervalId = setInterval(() => {
			setBallIcons(makeRandomIcons());
		}, 5000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return BallIcons;
}

export default useAccentOverlay;
