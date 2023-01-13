import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { AllStyles } from "../types";

export type TypeOrCallBack<Ret> = Ret | ((...args: any[]) => Ret);

export type StyleSheetObject<Style> = {
	[K in string]: TypeOrCallBack<Style | Style[] | StyleSheetObject<Style>>;
};

export type StyleSheetSource<S = AllStyles> = StyleSheetObject<S> | S;

interface IStyleBuilderCreate<S = AllStyles> {
	/**
	 * Force typings in an object to be a StyleObject or a nested StyleObject
	 *
	 * [INFO] A style entry may be an object or a callback that returns an object
	 *
	 * @param {StyleSheetSource | () => StyleSheetSource} style
	 *
	 * @return {Style} the source object unmodfied.
	 */
	<Style extends StyleSheetSource<S>>(style: TypeOrCallBack<Style>): Style;
}

interface ISpecificStyleBuilderCreate {
	text: IStyleBuilderCreate<TextStyle>;
	view: IStyleBuilderCreate<ViewStyle>;
	image: IStyleBuilderCreate<ImageStyle>;
}

export { IStyleBuilderCreate, ISpecificStyleBuilderCreate, AllStyles };
