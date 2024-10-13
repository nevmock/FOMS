import { OurBaseError } from '$lib/server/core/error';

export const checkBearerToken = async (event) => {
	const authHeader = event.request.headers.get('Authorization');
	// return new Response(
	// 	JSON.stringify({
	// 		code: 401,
	// 		status: 'test',
	// 		recordsTotal: 0,
	// 		data: null,
	// 		error: {
	// 			test: 'ttttt'
	// 		}
	// 	}),
	// 	{
	// 		status: 401,
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		}
	// 	}
	// );
	throw new OurBaseError(401, 'Forbidden', "You don't have any access");
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		// throw new Error('Unauthorized: Invalid token');
	}

	const token = authHeader.split(' ')[1];
	if (!isValidToken(token)) {
		throw new OurBaseError(401, 'Forbidden', 'Invalid token');
		// throw new Error('Unauthorized: Invalid token');
	}
	// return event;
	// try {
	// } catch (err) {}
};

const isValidToken = (token) => {
	console.info(token);
	return true;
};
