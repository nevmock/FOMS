import autoAdapter from '@sveltejs/adapter-auto';
import netlifyAdapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					return;
				}

				throw new Error(message);
			}
		},
		adapter: process.env.NODE_ENV === 'development'
			? netlifyAdapter({
				edge: false,
				split: false
			})
			: autoAdapter(),
		paths: {
			base: ''
		},
		csrf: {
			checkOrigin: false
		},
		alias: {
			$api: './src/routes/api/',
			$lib: './src/lib/'
		}
	},
	preprocess: vitePreprocess()
};
export default config;
