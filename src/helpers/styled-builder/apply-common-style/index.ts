import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from "react-native";
import * as types from "./types";

const createApplyCommonStyle = <S extends types.AllStyles>(): types.IStyleBuilderApplyCommon<S> => {
	return (common, style) => {
		if (common) {
			const out: any = {};
			Object.entries(style).forEach(([key, value]) => {
				out[key] = StyleSheet.flatten([common, value]);
			});
			return out;
		}
		throw new Error(`Invalid style object received: [${JSON.stringify(common, null, " ")}]`);
	};
};

const applyCommonGeneralStyle: types.IStyleBuilderApplyCommon = createApplyCommonStyle();

const applyCommonSpecificStyle: types.ISpecificStyleBuilderApplyCommon = {
	text: createApplyCommonStyle<TextStyle>(),
	view: createApplyCommonStyle<ViewStyle>(),
	image: createApplyCommonStyle<ImageStyle>(),
};

const applyCommonStyle = Object.assign(applyCommonGeneralStyle, applyCommonSpecificStyle);

type IApplyCommonStyle = types.IStyleBuilderApplyCommon & types.ISpecificStyleBuilderApplyCommon;

export { IApplyCommonStyle as type, applyCommonStyle as method };
