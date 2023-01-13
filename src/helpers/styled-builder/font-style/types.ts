import { TextStyle } from "react-native";
import { ColorKey, FontFamily } from "../../../constants/Assets";

type Font = FontFamily | null;
type Size = number | null;
type Color = ColorKey | null;
type Additional = TextStyle;

export { Font, Size, Color, Additional };

export interface Style extends Omit<TextStyle, "fontFamily" | "fontSize" | "color"> {
	font: Font;
	size: Size;
	color: Color;
}
