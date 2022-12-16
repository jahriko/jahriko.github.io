import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: 'https://jahriko.github.io',
	// Enable React to support React JSX components.
	integrations: [
		react(),
		tailwind({
			config: {
				applyAstroPreset: false,
				applyBaseStyles: true,
			},
		}),
		mdx(),
	],

	server: {
		port: 8080,
	}
});
