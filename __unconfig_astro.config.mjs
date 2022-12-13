
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;