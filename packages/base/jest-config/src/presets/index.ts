import next from "./use-cases/next";
import node from "./use-cases/node";
import expo from "./use-cases/expo";

const presets = {
	next,
	node,
	expo,
};

export type TestPreset = keyof typeof presets;

export default presets;
