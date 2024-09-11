import { API } from 'sveltekit-api';
import 'dotenv/config';

export default new API(import.meta.glob('./**/*.ts'), {
	openapi: '3.0.0',
	info: {
		title: 'Docs-FOCUSON API',
		version: '1.0.0',
		description: 'Restfull API for Docs-FOCUSON'
	},
	servers: [
		{
			url: 'https://dev-foms.netlify.app/',
			description: 'For DEV Server',
			variables: {
				// ['author']: {
				// 	default: 'nevmock'
				// }
			}
		},
		{
			url: 'http://localhost:5173/',
			description: 'For Local Server',
			variables: {
				// ['author']: {
				// 	default: 'nevmock'
				// }
			}
		}
	]
});
