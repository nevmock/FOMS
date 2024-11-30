import request from '../../../../utils/request';
import type { PageLoad } from './$types';

// export const function load: PageLoad({ params : any }) {
// 	console.info('FROM INDEX');
// 	const { id } = params;
// 	const response = await request.get(`/company?id=${}`);
// 	return {
// 		// response: response?.status === 200 ? response?.data?.data : null
// 		response: response?.data?.data || null
// 	};
// }

export const load: PageLoad = async ({ params }) => {
	const { id } = params;
	const response = await request.get(`/company?id=${id}`);
	// Kirimkan nilai id sebagai props ke komponen Svelte
	return {
		response: response?.data?.data || null
	};
};
