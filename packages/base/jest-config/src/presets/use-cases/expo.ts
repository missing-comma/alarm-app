import tsJestConfig from "ts-jest/presets";
import { JestPresetBuilder } from "../../helper/jest-config-preset-builder";
import { Test } from "../../helper/types";

const specifics: Test.Specifics = {
	unit: {
		testMatch: ["**/*.spec.ts", "**/*.spec.tsx"],
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
		...tsJestConfig,
		preset: "jest-expo",
		globals: {
			"ts-jest": {
				babelConfig: false,
				tsconfig: "./tsconfig.jest.json",
			},
		},
		modulePaths: ["<rootDir>"],

		/**
		 * Transforms
		 */
		transformIgnorePatterns: [
			"node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
		],
		// transform: {
		// 	...tsJestConfig.transform,
		// 	'\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
		// },
		/**
		 * Coverage
		 */
		collectCoverage: true,
		collectCoverageFrom: [
			"**/*.{js,jsx}",
			"!**/coverage/**",
			"!**/node_modules/**",
			"!**/babel.config.js",
			"!**/jest.setup.js",
		],
	},
	specifics
);
