import type { composeResponseParam, OurResponse } from '$lib/server/types/response';
import { getStatusText, StatusCodes } from 'http-status-codes';

export const composeResponse = (data): OurResponse<typeof  data>=> {
	const response: OurResponse<typeof data> = {
		code: StatusCodes.OK,
		status: getStatusText(StatusCodes.OK),
		recordsTotal: data?.length || 0,
		data: data || null,
		error: null,
	}

	return response;
}