/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import BallIcon from "../components/svg/ballIcon";

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}

function makeRandomIcons(dimensions) {
	const colors = ["orange", "green", "yellow", "purple"];
	let ballIconsTemp = [];

	for (let i = 0; i < 15; i++) {
		let height = getRandomNum(20, 100);
		let color = colors[Math.floor(getRandomNum(0, colors.length))];
		let top = Math.round(getRandomNum(0, dimensions.height));
		let left = Math.round(getRandomNum(0, dimensions.width));
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

function useAccentOverlay(overlayEl) {
	const [refresh, setRefresh] = useState(false);
	let [ballIcons, setBallIcons] = useState([]);

	let viewHeight = document.body.clientHeight;
	let viewWidth = document.body.clientWidth;

	useEffect(() => {
		setBallIcons(
			makeRandomIcons({
				height: viewHeight,
				width: viewWidth
			})
		);
		let intervalId = setInterval(() => {
			viewHeight = document.body.clientHeight;
			viewWidth = document.body.clientWidth;
			setBallIcons(
				makeRandomIcons({
					height: viewHeight,
					width: viewWidth
				})
			);
		}, 5000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	useEffect(() => {
		if (refresh) {
			viewHeight = document.body.clientHeight;
			viewWidth = document.body.clientWidth;
			setBallIcons(
				makeRandomIcons({
					height: viewHeight,
					width: viewWidth
				})
			);
			setRefresh(false);
		}
	}, [refresh]);

	return {
		ballIcons: (
			<div
				style={{
					height: viewHeight,
					width: viewWidth
				}}
				className="accentOverlay__icons"
			>
				{ballIcons}
			</div>
		),
		setRefresh
	};
}

export default useAccentOverlay;
