module.exports = {
	defaultSeverity: "error",
	extends: ["tslint-config-airbnb", "tslint-react"],
	jsRules: {},
	rules: {
		"import-name": [false],
		"variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case"],
		quotemark: [true, "double", "avoid-escape"],
		indent: [true, "tabs"],
		"ter-indent": [false],
		align: {
			options: ["statements"],
		},
		"function-name": [false],
		"jsx-no-lambda": false,
		semicolon: [false],
	},
	rulesDirectory: [],
	"@next/next/no-html-link-for-pages": "off",
	// "react/jsx-key": "off",
};
