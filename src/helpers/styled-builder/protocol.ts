import { CreateStyle } from "./create-style/protocol";
import { StyleBuilderFontStyle } from "./font-style/protocol";
import * as applyCommonStyle from "./apply-common-style";
import { IStyleBuilderRootCreateWithCallbackFn } from "./create-root-style-with-callback/types";

export interface IStyleBuilder {
	/**
	 * Append a common style to every Style in the object
	 *
	 * @param {types.AllStyles} common React-Native style object to be applied to every style in the
	 * source object
	 * @param {Record<string, types.AllStyles>} style an object where every key is a React-Native style object
	 *
	 * @return {Record<string, types.AllStyles>} the input style, but with all it's styles merged with the
	 * common style parameter's object
	 */
	readonly applyCommon: applyCommonStyle.type;

	/**
	 * Force typings in an object to be a StyleObject or a nested StyleObject
	 *
	 * [INFO] A style entry may be an object or a callback that returns an object
	 *
	 * @param {StyleSheetSource | () => StyleSheetSource} style
	 *
	 * @return {Style} the source object unmodfied.
	 */
	readonly create: CreateStyle;

	readonly font: StyleBuilderFontStyle;

	readonly callback: IStyleBuilderRootCreateWithCallbackFn;
}
