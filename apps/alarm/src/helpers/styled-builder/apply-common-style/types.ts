import { AllStyles, IAllStyleMap } from '../types';

type ApplyCommon<Input extends object, Common> = { [K in keyof Input]: Input[K] & Common };

interface IStyleBuilderApplyCommon<S = AllStyles> {
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
	<Style extends Record<string, S>, Common extends S>(common: Common, style: Style): ApplyCommon<
		Style,
		Common
	>;
}

type ISpecificStyleBuilderApplyCommon = {
	[S in keyof IAllStyleMap]: IStyleBuilderApplyCommon<IAllStyleMap[S]>;
};

export { IStyleBuilderApplyCommon, ISpecificStyleBuilderApplyCommon };
export * from '../types';
