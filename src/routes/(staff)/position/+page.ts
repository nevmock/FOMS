import request from '../../../utils/request';

export async function load() {
	console.info('FROM INDEX');
	const response = await request.get('/position');
	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data?.data || null
	};
}
