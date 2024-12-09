import request from '../../../../utils/request';
import type { PageLoad } from './$types';

export const prerender = false;
export async function load({ params }) {
	const response = await request.get(`/company/${params.id}/`);

	return {
		response: response?.data?.data || null
	};
}
