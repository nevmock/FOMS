import request from '../../../../utils/request';

export async function load() {
	console.info('FROM INDEX');
	const response = await request.get('/company', {
		start: 1,
		length: 15,
		search: '',
		sort: 'desc'
	});

	if (!response) {
		throw new Error('Data tidak ditemukan');
	}

	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data?.data || null
	};
}
