module.exports = {
	tabWidth: 2,
	useTabs: true,
	printWidth: 120,
	trailingComma: "all",
	astroAllowShorthand: true,
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
