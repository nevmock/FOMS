import request from '../../../utils/request';

// export const preRander = true;

export async function load({ url }: { url: URL }) {
	const page: number = parseInt(url.searchParams.get('start') || '1');
	const length = 10;
	const response = await request.get('/position', {
		start: (page - 1) * length + 1,
		length: length,
		order: 'desc'
	});
	return {
		// response: response?.status === 200 ? response?.data?.data : null
		response: response?.data || null,
		page,
		length
	};
}
