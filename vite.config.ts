import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import sveltekitApiGenerator from 'vite-plugin-sveltekit-api-generator';

export default defineConfig({
	plugins: [
		sveltekit(),
	// 	sveltekitApiGenerator({
	// 	apiClientFileName: 'apiDocs.ts',
	// 	apiClientOuputDirectory: './',
	// 	generateSwaggerUI: true,
	// 	swaggerOptions: {
	// 		openapi: '3.0.0',
	// 		info: {
	// 			title: 'FOMS API DOC',
	// 			version: '1.0.0',
	// 		},
	// 		servers: [
	// 			{
	// 				url: 'https://dev-foms.netlify.app/',
	// 			},
	// 		],
	// 	}
	// })
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
