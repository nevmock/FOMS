import type { OurResponse } from '$lib/server/types/response';

export const composeResponse = (data): OurResponse<typeof data> => {
	const response: OurResponse<typeof data> = {
		code: 200,
		status: 'OK',
		recordsTotal: data?.recordsTotal || 0,
		data: data?.message ? data : data?.data ? data?.data : null || null,
		error: null
	};

	return response;
};

export const composeError = (errorData): OurResponse<typeof errorData> => {
	const response: OurResponse<typeof errorData> = {
		code: errorData.code,
		status: errorData.status,
		recordsTotal: 0,
		data: null,
		error: errorData
	};

	return response;
};

export const parseValidationError = (errorMessage) => {
	const errorObj = {};

	const errorMessages = errorMessage.split('Validation error: ')[1].split(';');

	errorMessages.forEach((message) => {
		message = message.trim();

		if (message.includes('Required at')) {
			const requiredRegex = /Required at \"(\w+)\"/;
			const requiredMatch = message.match(requiredRegex);

			if (requiredMatch) {
				const fieldName = requiredMatch[1];
				const errorMsg = 'Field is required';

				if (!errorObj[fieldName]) {
					errorObj[fieldName] = [];
				}
				errorObj[fieldName].push(errorMsg);
			}
		} else if (message.includes('cannot be empty')) {
			const emptyRegex = /(\w+) cannot be empty at \"(\w+)\"/;
			const emptyMatch = message.match(emptyRegex);

			if (emptyMatch) {
				const errorMsg = `${emptyMatch[1]} cannot be empty`;
				const fieldName = emptyMatch[2];

				if (!errorObj[fieldName]) {
					errorObj[fieldName] = [];
				}
				errorObj[fieldName].push(errorMsg);
			}
		} else {
			const regex = /Expected (\w+), received (\w+) at \"(\w+)\"/;
			const match = message.match(regex);
			console.info(match);

			if (match) {
				const expectedType = match[1];
				const receivedType = match[2];
				const fieldName = match[3];

				const errorMsg = `Expected ${expectedType}, received ${receivedType}`;

				if (!errorObj[fieldName]) {
					errorObj[fieldName] = [];
				}
				errorObj[fieldName].push(errorMsg);
			}
		}
	});

	return errorObj;
};
