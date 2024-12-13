import request from '../../../../utils/request';
import type { PageLoad } from './$types';

export const prerender = false;
export async function load({ params }) {
	const response = await request.get(`/company/${params.id}/`);

	if (!response) {
		throw new Error('Data tidak ditemukan');
	}

	return {
		response: response?.data?.data || null
	};
}
