const tintColorLight = "white";
const tintColorDark = "#191720";

export type ColorKey = string;

export interface ColorTheme {
	readonly text: string;
	readonly background: string;
	readonly tint: string;
	readonly tabIconDefault: string;
	readonly tabIconSelected: string;
	readonly error: string;
	readonly button: {
		readonly fg: string;
		readonly bg: string;
	};
}

export declare namespace ColorTheme {
	export type Name = keyof ColorTheme;
}

const makeTheme = (theme: ColorTheme) => theme;

export default {
	light: makeTheme({
		text: "#000",
		background: "#fff",
		tint: tintColorLight,
		tabIconDefault: "#ccc",
		tabIconSelected: tintColorLight,
		button: {
			fg: tintColorLight,
			bg: tintColorDark,
		},
		error: "red",
	}),
	dark: makeTheme({
		text: "#fff",
		background: "#000",
		tint: "cyan",
		tabIconDefault: "#ccc",
		tabIconSelected: tintColorDark,
		button: {
			fg: tintColorDark,
			bg: tintColorLight,
		},
		error: "red",
	}),
};

export type FontFamily = "space-mono";
