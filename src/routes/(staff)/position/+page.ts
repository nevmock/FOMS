import request from '../../../utils/request';

export async function load({ url }: { url: URL }) {
	const page: number = parseInt(url.searchParams.get('start') || '1');
	const length = 10;
	const response = await request.get('/position', {
		start: (page - 1) * length + 1,
		length: length,
		order: 'desc'
	});
	// const response = null;
	console.info(response)

	// if (!response) {
	// 	throw new Error('Data tidak ditemukan');
	// }
	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data || null,
		// response: null,
		page,
		length
	};
}
