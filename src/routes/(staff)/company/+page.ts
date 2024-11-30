import request from '../../../utils/request';

export async function load() {
	console.info('FROM INDEX');
	const response = await request.get('/company');
	return {
		response: response?.data || null
	};
}

// import request from '../../../utils/request';

// export async function load({ url }: { url: URL }) {
// 	const page = parseInt(url.searchParams.get('start') || '1');
// 	const length = parseInt(url.searchParams.get('length') || '5');

// 	const response = await request.get(`/company?start=${page}&length=${length}`);

// 	return {
// 		response: response?.data || null,
// 		page,
// 		length
// 	};
// }
