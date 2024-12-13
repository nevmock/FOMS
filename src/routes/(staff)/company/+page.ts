import request from '../../../utils/request';

export async function load({ url }: { url: URL }) {
	const page: number = parseInt(url.searchParams.get('start') || '1');
	const length = 10;
	// Kirim request ke API dengan search term
	const response = await request.get(`/company`, {
		start: (page - 1) * length + 1,
		length: length,
		sort: 'desc'
	});

	if (!response) {
		throw new Error('Data tidak ditemukan');
	}

	return {
		response: response?.data || null,
		page,
		length
	};
}
