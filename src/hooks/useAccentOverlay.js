import React, { useState, useEffect, useCallback } from "react";
import BallIcon from "../components/svg/ballIcon";

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}

function makeRandomIcons() {
	const colors = ["orange", "green", "red", "purple"];
	let ballIconsTemp = [];

	for (let i = 0; i < 10; i++) {
		let height = getRandomNum(10, 50);
		let color = colors[Math.floor(getRandomNum(0, colors.length))];
		let top = Math.round(getRandomNum(0, 100));
		let left = Math.round(getRandomNum(0, 100));
		let opacity = getRandomNum(0.1, 0.5).toFixed(1);

		ballIconsTemp.push(
			<BallIcon
				key={i}
				style={{
					top: top + "%",
					left: left + "%",
					opacity,
					height,
					color,
					transition: "all 8s",
				}}
			/>
		);
	}

	return ballIconsTemp;
}

function useAccentOverlay() {
	let [ballIcons, setBallIcons] = useState([]);

	const make = useCallback(() => {
		setBallIcons(makeRandomIcons());
	}, []);

	useEffect(() => {
		make();
		let intervalId = setInterval(() => {
			make();
		}, 10000);
		return () => {
			clearInterval(intervalId);
		};
	}, [make]);

	return {
		ballIcons,
	};
}

export default useAccentOverlay;
