/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
	Text as DefaultText,
	View as DefaultView,
	ScrollView as DefaultScrollView,
	FlatList as DefaultFlatList,
} from "react-native";

import Colors from "../constants/Assets";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	}
	return Colors[theme][colorName];
}

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
export type FlatListProps = ThemeProps & DefaultFlatList["props"];

type ComponentLikeProps = TextProps | ViewProps | ScrollViewProps | FlatListProps;

const makeThemedComponent = <P extends ComponentLikeProps>(Component: { new (props: P): any }) => {
	return (props: P) => {
		const { style, lightColor, darkColor, ...otherProps } = props;
		const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

		return <Component style={[{ color }, style]} {...otherProps} />;
	};
};

export const Text = makeThemedComponent<TextProps>(DefaultText);
export const View = makeThemedComponent<ViewProps>(DefaultView);
export const ScrollView = makeThemedComponent<ScrollViewProps>(DefaultScrollView);
export const FlatList = makeThemedComponent<FlatListProps>(DefaultFlatList);
