const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export type ColorKey = string;

export default {
	light: {
		text: "#000",
		background: "#fff",
		tint: tintColorLight,
		tabIconDefault: "#ccc",
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: "#fff",
		background: "#000",
		tint: tintColorDark,
		tabIconDefault: "#ccc",
		tabIconSelected: tintColorDark,
	},
};

export type FontFamily = "space-mono";