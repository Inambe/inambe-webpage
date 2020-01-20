class CSSProperties {
	static getValue(property, el) {
		return window
			.getComputedStyle(el ? el : document.documentElement)
			.getPropertyValue(property)
			.trim();
	}
	static setValue(property, value, el) {
		return (el ? el : document.documentElement).style.setProperty(
			property,
			value
		);
	}
}
export default CSSProperties;
