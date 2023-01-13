/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import Colors, { ColorTheme } from "../constants/Assets";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor<CN extends ColorTheme.Name>(
	props: { light?: ColorTheme[CN]; dark?: ColorTheme[CN] },
	colorName: CN
) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	}
	return Colors[theme][colorName];
}
