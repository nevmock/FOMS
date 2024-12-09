import request from '../../../../utils/request';

export async function load() {
	console.info('FROM INDEX');
	const response = await request.get('/company', {
		start: 1,
		length: 15,
		search: '',
		sort: 'desc'
	});
	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data?.data || null
	};
}
