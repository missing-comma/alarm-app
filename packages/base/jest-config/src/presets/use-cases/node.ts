import { JestPresetBuilder } from "../../helper/jest-config-preset-builder";
import { Test } from "../../helper/types";

const specifics: Test.Specifics = {
	unit: {
		testMatch: ["**/*.spec.ts"],
	},
	integration: {
		testMatch: ["**/*.test.ts"],
	},
	staged: {
		findRelatedTests: true,
	},
};

export default new JestPresetBuilder(
	{
		cacheDirectory: ".jest-cache",
		coverageDirectory: ".jest-coverage",
		coveragePathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/"],
		coverageReporters: ["html", "text"],
		coverageThreshold: {
			global: {
				branches: 100,
				functions: 100,
				lines: 100,
				statements: 100,
			},
		},
		transform: {
			".+\\.ts$": "ts-jest",
		},
		transformIgnorePatterns: [],
		modulePathIgnorePatterns: ["(?:.+?)/dist/"],
	},
	specifics
);
