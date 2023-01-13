import * as types from "./types";

export * from "./create-style-fn/protocol";

export type CreateStyle = types.IStyleBuilderCreate & types.ISpecificStyleBuilderCreate;
export interface CreateStyleGenerator {
	generate(): CreateStyle;
}
