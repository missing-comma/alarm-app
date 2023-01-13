import {
	Text as DefaultText,
	View as DefaultView,
	ScrollView as DefaultScrollView,
	FlatList as DefaultFlatList,
} from "react-native";

import { ColorTheme } from "../constants/Assets";
import { useThemeColor as _useThemeColor } from "../hooks/use-theme-color";

/** @deprecated */
export const useThemeColor = _useThemeColor;

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type FlatListProps = ThemeProps & DefaultFlatList["props"];

type ComponentLikeProps = TextProps | ViewProps | ScrollViewProps | FlatListProps;

const makeThemedComponent = <P extends ComponentLikeProps>(
	Component: any,
	colorName: ColorTheme.Name
) => {
	return (props: P) => {
		const { style, lightColor, darkColor, ...otherProps } = props;
		const color = _useThemeColor({ light: lightColor, dark: darkColor }, colorName);

		const themeStyle = ["background"].includes(colorName)
			? { backgroundColor: color }
			: { color };

		return <Component style={[themeStyle, style]} {...otherProps} />;
	};
};

export const Text = makeThemedComponent<TextProps>(DefaultText, "text");
export const View = makeThemedComponent<ViewProps>(DefaultView, "background");
export const ScrollView = makeThemedComponent<ScrollViewProps>(DefaultScrollView, "background");
export const FlatList = makeThemedComponent<FlatListProps>(DefaultFlatList, "background");
