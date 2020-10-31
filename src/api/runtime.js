import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config"

export const isBrowser = () => {
	return typeof window !== "undefined"
}

export const tailwindTheme = () => {
	return resolveConfig(tailwindConfig).theme
}

export const tailwindScreen = screen => {
	return parseInt(tailwindTheme().screens[screen])
}
