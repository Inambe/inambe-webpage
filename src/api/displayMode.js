import CSSProperties from "./cssProperties";

class DisplayMode {
	static PinkBlueMode() {}
	static CleanMode() {
		CSSProperties.setValue(
			"--bg-main",
			CSSProperties.getValue("--clr-white")
		);
		CSSProperties.setValue(
			"--fc-main",
			CSSProperties.getValue("--clr-black")
		);
		CSSProperties.setValue("--nav-bg", "none");
		CSSProperties.setValue(
			"--nav-color",
			CSSProperties.getValue("--clr-black")
		);
		CSSProperties.setValue("--ftr-bg", "none");
	}
}
export default DisplayMode;
