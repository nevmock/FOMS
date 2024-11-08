import request from '../../../../utils/request';

export async function load({ params }) {
	const response = await request.get(`/company/${params.id}/`);

	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data?.data || null
	};
}
