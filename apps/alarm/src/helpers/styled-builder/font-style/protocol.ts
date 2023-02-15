import { TextStyle } from "react-native";
import { Additional, Color, Font, Size, Style } from "./types";

type Optional<V> = V | null | undefined;

export interface StyleBuilderFontStyleBuild {
	/**
	 * Create a text style builder
	 *
	 * @param {common: Partial<Style>} common
	 *
	 * @return {(partial?: Partial<Style>) => TextStyle}
	 */
	build(common: Partial<Style>): (partial?: Partial<Style>) => TextStyle;
	/**
	 * Create a text style builder
	 *
	 * @param {Optional<Font>} font key for the font family
	 * @param {Optional<Size>} size number key for the font-size
	 * @param {Optional<Color>} color key of the color
	 * @param {Additional} additionalFields
	 *
	 * @return {(partial?: Partial<Style>) => TextStyle}
	 */
	build(
		font?: Optional<Font>,
		size?: Optional<Size>,
		color?: Optional<Color>
	): (partial?: Partial<Style>) => TextStyle;
}

export namespace StyleBuilderFontStyleBuild {
	export type Args =
		| [Partial<Style> | undefined]
		| [Optional<Font> | undefined, Optional<Size> | undefined, Optional<Color> | undefined];
}

export interface StyleBuilderFontStyle {
	/**
	 * Create a text style object
	 *
	 * @param {Optional<Font>} fontFamily key for the font family
	 * @param {Optional<Size>} fontSize number key for the font-size
	 * @param {Optional<Color>} color key of the color
	 * @param {Additional|undefined} additionalFields?
	 *
	 * @return {TextStyle}
	 */
	create(font?: Optional<Font>, size?: Size, color?: Color, additional?: Additional): TextStyle;
}

export type IStyleBuilderCreateFontStyle = Pick<StyleBuilderFontStyle, "create">;
