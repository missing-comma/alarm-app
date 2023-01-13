import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AllStyles = ViewStyle | TextStyle | ImageStyle;

export interface IAllStyleMap {
	image: ImageStyle;
	view: ViewStyle;
	text: TextStyle;
}
