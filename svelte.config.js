import autoAdapter from '@sveltejs/adapter-auto';
// import staticAdapter from '@sveltejs/adapter-static';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
import 'dotenv/config';

const config = {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		},
		// adapter: process.env.BASE_PATH !== '' && process.env.BASE_PATH !== undefined ? staticAdapter() : autoAdapter(),
		adapter:
			process.env.NODE_ENV === 'development'
				? netlifyAdapter({
						edge: false,
						split: false
					})
				: autoAdapter(),
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
