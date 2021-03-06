module.exports = {
	root: true,
	plugins: ["prettier", "@typescript-eslint"],
	env: {
		browser: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: ["prettier", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
	overrides: [
		{
			files: ["*.ts"],
			extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
			parserOptions: {
				project: ["./tsconfig.json"],
			},
			rules: {
				"@typescript-eslint/switch-exhaustiveness-check": "error",
				"@typescript-eslint/no-floating-promises": [
					"error",
					{
						ignoreVoid: true, // this is the default
						ignoreIIFE: true, // this is different from the default
					},
				],
			},
		},
	],
	// Do NOT use any eslint rules that affect code formatting because prettier handles that.
	rules: {
		"no-console": "error",
		"no-debugger": "error",
		"no-var": "error",
		"eqeqeq": "error",
		"no-restricted-properties": [
			"error",
			{
				object: "document",
				property: "title",
			},
		],
		"prettier/prop-types": "off",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/no-extra-semi": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
};
