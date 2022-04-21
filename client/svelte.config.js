import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			test: {
				global: true,
				includeSource: ['src/**/*.{js,ts}']
			},
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib'),
					$scripts: path.resolve('./src/scripts')
					// { find: "$styles", replacement: new URL("/src/styles", import.meta.url).pathname },
					// { find: "$styles", replacement: path.resolve("./src/styles") },
				}
			}
		}
	}
};

export default config;
