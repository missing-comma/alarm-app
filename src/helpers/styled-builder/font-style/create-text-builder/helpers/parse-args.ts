import { Style } from "../../types";
import { StyleBuilderFontStyleBuild } from "../../protocol";

export const parseArgs = (...args: StyleBuilderFontStyleBuild.Args): Partial<Style> => {
	// if (args.length === 0) return {};
	if (typeof args[0] === "object" && args[0]) {
		return args[0];
	}

	const [font, size, color] = args;
	const style: Partial<Style> = {};
	if (font) style.font = font;
	if (size) style.size = size;
	if (color) style.color = color;

	return style;
};
