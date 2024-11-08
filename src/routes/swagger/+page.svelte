<script>
	import { onMount } from 'svelte';
	import SwaggerUI from 'swagger-ui';
	import 'swagger-ui/dist/swagger-ui.css';
	onMount(() => {
		const loadScripts = () => {
			return new Promise((resolve, reject) => {
				const scriptBundle = document.createElement('script');
				scriptBundle.src = '/swagger-ui/swagger-ui-bundle.js';
				scriptBundle.onload = () => {
					const scriptStandalone = document.createElement('script');
					scriptStandalone.src = '/swagger-ui/swagger-ui-standalone-preset.js';
					scriptStandalone.onload = () => resolve();
					scriptStandalone.onerror = reject;
					document.body.appendChild(scriptStandalone);
				};
				scriptBundle.onerror = reject;
				document.body.appendChild(scriptBundle);
			});
		};

		loadScripts().then(() => {
				SwaggerUI({
					dom_id: '#swagger-ui',
					url: '/api/openapi',
					deepLinking: true,
					// presets: [
					// 	SwaggerUI.presets.apis,
					// 	SwaggerUI.SwaggerUIStandalonePreset
					// ],
					// layout: "StandaloneLayout"
				});
		}).catch((error) => {
			console.error('Failed to load Swagger UI scripts', error);
		});
	});
</script>

<style>
    #swagger-ui {
        height: 100vh;
        width: 100%;
    }
</style>

<div id="swagger-ui"></div>