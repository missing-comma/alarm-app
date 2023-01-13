import { StyleSheetSource } from "../create-style/types";

export { CreateStyle } from "../create-style/protocol";
export { StyleSheetSource } from "../create-style/types";

type ComposerFn<Args extends any[], Style extends StyleSheetSource> = (...args: Args) => Style;

export interface IStyleBuilderRootCreateWithCallback {
	/**
	 * Force typings in an object to be a StyleObject or a nested StyleObject
	 *
	 * [INFO] A style entry may be an object or a callback that returns an object
	 *
	 * @param {(...args: Args) => Style} composer
	 *
	 * @return {Style} the source object unmodfied.
	 */
	callback: IStyleBuilderRootCreateWithCallbackFn;
}

export interface IStyleBuilderRootCreateWithCallbackFn {
	/**
	 * Force typings in an object to be a StyleObject or a nested StyleObject
	 *
	 * [INFO] A style entry may be an object or a callback that returns an object
	 *
	 * @param {(...args: Args) => Style} composer
	 *
	 * @return {Style} the source object unmodfied.
	 */
	<Args extends any[], Style extends StyleSheetSource>(
		composer: ComposerFn<Args, Style>
	): ComposerFn<Args, Style>;
}

export { ComposerFn as IStyleBuilderRootCreateWithCallbackComposerFn };
