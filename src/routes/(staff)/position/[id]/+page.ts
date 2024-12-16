// import request from '../../../../utils/request';
// import type { PageLoad } from './$types';

// export const prerender = false;
// export async function load({ params }) {
// 	try {
// 		const positionResponse = await request.get(`/position/${params.id}/`);
// 		const levelResponse = await request.get(`/level`);
// 		const officerResponse = await request.get(`/officer`);

// 		return {
// 			level: levelResponse?.data?.data || null,
// 			officer: officerResponse?.data?.data || null,
// 			position: positionResponse?.data?.data || null
// 		};
// 	} catch (error) {
// 		console.error('Error fetching data:', error);
// 		return {
// 			level: null,
// 			officer: null,
// 			position: null
// 		};
// 	}
// }

import request from '../../../../utils/request';

export const prerender = false;
export async function load({ params }) {
	const response = await request.get(`/position/${params.id}`);

	if (!response) {
		throw new Error('Data tidak ditemukan');
	}

	return {
		response: response?.data?.data || null
	};
}
