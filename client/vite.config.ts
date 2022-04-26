/// <reference types="vitest" />
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	test: {
		includeSource: ["src/**/*.{js,ts}"],
	},
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
			$scripts: path.resolve("./src/scripts"),
		},
	},
});
