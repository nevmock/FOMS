import type { OurPayload } from '$lib/server/types/request';
import { OurBaseError } from '$lib/server/core/error';
import { getStatusText, StatusCodes } from 'http-status-codes';
import type { Company } from '@prisma/client';

export class OurBaseService<T> {
	getAll(payload: OurPayload): Promise<Array<T>> {
		throw new OurBaseError(StatusCodes.INTERNAL_SERVER_ERROR, getStatusText(StatusCodes.INTERNAL_SERVER_ERROR), 'getAll(payload: OurPayload) must be implemented');
	}
	getDetail(id: string): Promise<T> {
		throw new OurBaseError(StatusCodes.INTERNAL_SERVER_ERROR, getStatusText(StatusCodes.INTERNAL_SERVER_ERROR), 'getById() must be implemented');
	}
	save(id: string, payload: Company): void {
		throw new OurBaseError(StatusCodes.INTERNAL_SERVER_ERROR, getStatusText(StatusCodes.INTERNAL_SERVER_ERROR), 'save() must be implemented');
	}
	delete(id: string): void {
		throw new OurBaseError(StatusCodes.INTERNAL_SERVER_ERROR, getStatusText(StatusCodes.INTERNAL_SERVER_ERROR), 'delete() must be implemented');
	}
}