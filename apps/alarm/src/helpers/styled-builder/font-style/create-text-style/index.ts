import { TextStyle } from "react-native";
import { Additional, Color, Font, Size } from "../types";
import { IStyleBuilderCreateFontStyle } from "../protocol";

export class CreateFontStyle implements IStyleBuilderCreateFontStyle {
	/**
	 * Create a text style object
	 *
	 * @param {Font} font? key for the font family
	 * @param {Size} size? number key for the font-size
	 * @param {Color} color?
	 * @param {Additional} additional?
	 *
	 * @return {TextStyle}
	 */
	create = (font?: Font, size?: Size, color?: Color, additional: Additional = {}): TextStyle => {
		const style: TextStyle = {};
		if (font) style.fontFamily = font;
		if (size) style.fontSize = size;
		if (color) style.color = color;
		return { ...style, ...additional };
	};
}
