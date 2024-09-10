import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
import 'dotenv/config'

const config = {
	kit: {
		// adapter: process.env.BASE_PATH !== '' && process.env.BASE_PATH !== undefined ? staticAdapter() : autoAdapter(),
		adapter: process.env.NODE_ENV === 'development' ? netlifyAdapter({
			edge: false,
			split: false
		}) : autoAdapter(),
		paths: {
			base: process.env.BASE_PATH
		},
		csrf: {
			checkOrigin: false,
		},
		alias: {
			"$api": "./src/routes/api/",
		},
	},
	preprocess: vitePreprocess()
};
export default config;
