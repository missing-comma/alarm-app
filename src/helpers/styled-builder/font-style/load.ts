import { StyleBuilderFontStyle, StyleBuilderFontStyleBuild } from "./protocol";

export class StyleBuilderFontStyleAdapter
	implements StyleBuilderFontStyle, StyleBuilderFontStyleBuild
{
	public readonly create: Pick<StyleBuilderFontStyle, "create">["create"];
	public readonly build: Pick<StyleBuilderFontStyleBuild, "build">["build"];

	constructor(
		create: Pick<StyleBuilderFontStyle, "create">,
		build: Pick<StyleBuilderFontStyleBuild, "build">
	) {
		this.create = create.create;
		this.build = build.build;
	}
}

export * from "./create-text-builder";
export * from "./create-text-style";
