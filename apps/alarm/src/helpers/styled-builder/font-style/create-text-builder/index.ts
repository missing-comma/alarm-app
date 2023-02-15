import { TextStyle } from "react-native";
import { Style } from "../types";
import { IStyleBuilderCreateFontStyle, StyleBuilderFontStyleBuild } from "../protocol";
import { parseArgs } from "./helpers/parse-args";

export class BuildFontStyle implements StyleBuilderFontStyleBuild {
	constructor(private readonly createFont: IStyleBuilderCreateFontStyle) {}

	build = (...args: any[]) => {
		const common = parseArgs(...(args as any));

		return (partial: Partial<Style> = {}): TextStyle => {
			const style = { ...common, ...partial };
			const { font, size, color, ...additional } = style;

			return this.createFont.create(font, size, color, additional as any);
		};
	};
}
