import { IStyleBuilder } from "./protocol";
import { StyleBuilderAdapter } from "./load";
import { CreateStyleAdapter, CreateStyleFnAdapter } from "./create-style";
import { StyleBuilderFontStyleAdapter, BuildFontStyle, CreateFontStyle } from "./font-style/load";
import { StyleBuilderRootCreateWithCallbackAdapter } from "./create-root-style-with-callback";

export const styleBuilderFactory = (): IStyleBuilder => {
	const createFontStyle = new CreateFontStyle();

	const font = new StyleBuilderFontStyleAdapter(
		createFontStyle,
		new BuildFontStyle(createFontStyle)
	);

	const create = new CreateStyleAdapter(new CreateStyleFnAdapter()).generate();

	const callback = new StyleBuilderRootCreateWithCallbackAdapter(create);

	return new StyleBuilderAdapter(font, create, callback);
};

export const StyleBuilder = styleBuilderFactory();
