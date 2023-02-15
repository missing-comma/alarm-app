import { CreateStyle } from "./create-style/protocol";
import { StyleBuilderFontStyle } from "./font-style/protocol";
import { IStyleBuilder } from "./protocol";
import * as applyCommonStyle from "./apply-common-style";
import {
	IStyleBuilderRootCreateWithCallback,
	IStyleBuilderRootCreateWithCallbackFn,
} from "./create-root-style-with-callback/types";

export class StyleBuilderAdapter implements IStyleBuilder {
	public readonly applyCommon: applyCommonStyle.type;
	public readonly callback: IStyleBuilderRootCreateWithCallbackFn;

	constructor(
		public readonly font: StyleBuilderFontStyle,
		public readonly create: CreateStyle,
		{ callback }: IStyleBuilderRootCreateWithCallback
	) {
		this.applyCommon = applyCommonStyle.method;
		this.callback = callback;
	}
}
