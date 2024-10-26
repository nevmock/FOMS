import { StatusCodes } from 'http-status-codes';
import { OurBaseError } from '$lib/server/core/error';
import { Prisma } from '@prisma/client';
import { parseValidationError } from '$lib/server/utils/response';

export const handle = async ({ event, resolve }) => {
	try {
		return await resolve(event);
	} catch (error) {
		await resolve(error);
	}
};

// export const handle = async ({ event, resolve }) => {
// 	try {
// 		return await resolve(event); // Pastikan resolve dipanggil dengan await
// 	} catch (error) {
// 		resolve(handleError({ error })); // Menangani kesalahan
// 		// await handleError({ error });
// 	}
// };

export const handleError = async ({ error }: { error: unknown }) => {
	let code = 500;
	let status = '';
	const recordsTotal = 0;
	const data = null;

	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		code = StatusCodes.INTERNAL_SERVER_ERROR;
		status = 'DATABASE ERROR';
		error = {
			message: error.message
		};
	} else if (error instanceof OurBaseError) {
		code = error.errorCode;
		status = error.statusCode;
		error = {
			// message: error.stack
			message: error.message
		};

		// return {
		// 	code: code,
		// 	status: status,
		// 	recordsTotal: recordsTotal,
		// 	data: data,
		// 	error: error
		// };
		// return new Response(
		// 	JSON.stringify({
		// 		code: code,
		// 		status: status,
		// 		recordsTotal: recordsTotal,
		// 		data: data,
		// 		error: error
		// 	}),
		// 	{
		// 		status: code,
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		}
		// 	}
		// );
	} else if (error.name === 'TokenExpiredError') {
		if (error.message === 'invalid signature') {
			error = StatusCodes.FORBIDDEN;
			status = 'Forbidden';
			error = {
				message: 'Invalid Signature'
			};
		} else {
			code = StatusCodes.FORBIDDEN;
			status = 'Forbidden';
			error = {
				message: 'Token Is Invalid Or No Longer Valid'
			};
		}
	} else if (error.name === 'MulterError') {
		const errorObj: Record<string, string[]> = {};
		errorObj[error.field] = [error.message];

		code = StatusCodes.BAD_REQUEST;
		status = 'LIMIT_FILE_SIZE';
		error = errorObj;
	} else if (error.name === 'ValidationError') {
		const errorObj: Record<string, string[]> = {};

		for (const detail of error.details) {
			errorObj[detail.path] = [detail.message];
		}

		code = StatusCodes.BAD_REQUEST;
		status = 'Bad Request';
		error = errorObj;
	} else if (error.name === 'PrismaClientValidationError') {
		code = 400;
		status = 'Prisma Validation Error';
		error = error.errors;
	} else if (
		typeof error == 'object' &&
		// JSON.parse(JSON.stringify(error)) &&
		error.toString()?.includes('Invalid body')
	) {
		console.info('YES VALIDATION');
		code = JSON.parse(JSON.stringify(error)).status;
		status = 'Validation Error';
		error = {
			message: parseValidationError(JSON.parse(JSON.stringify(error)).body.message)
		};
	} else {
		code = 500;
		status = 'Internal Server Error';
		error = {
			message: JSON.parse(JSON.stringify(error)).stack || error.toString()
		};
	}

	const response = new Response(
		JSON.stringify({
			code: code,
			status: status,
			recordsTotal: recordsTotal,
			data: data,
			error: error
		}),
		{
			status: code,
			statusText: status,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	return response;
};
