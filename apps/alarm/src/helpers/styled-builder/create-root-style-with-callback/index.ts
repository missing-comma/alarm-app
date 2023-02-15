import {
	IStyleBuilderRootCreateWithCallback,
	IStyleBuilderRootCreateWithCallbackComposerFn as ComposerFn,
	CreateStyle,
	StyleSheetSource,
} from "./types";

export class StyleBuilderRootCreateWithCallbackAdapter
	implements IStyleBuilderRootCreateWithCallback
{
	constructor(private readonly createStyleFn: CreateStyle) {}

	callback<Args extends any[], Style extends StyleSheetSource>(
		composer: ComposerFn<Args, Style>
	): ComposerFn<Args, Style> {
		const wrapStyle = this.createStyleFn(() => ({
			composer: composer as any,
		}));
		return wrapStyle.composer;
	}
}
