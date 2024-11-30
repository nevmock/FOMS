import request from '../../../../utils/request';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { id } = params;
	const response = await request.get(`/company/${id}`);
	// Kirimkan nilai id sebagai props ke komponen Svelte
	return {
		response: response?.data?.data || null
	};
};
