import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { positionPayload, positionSchema } from '$lib/server/schema/position';
import PositionService from '$lib/server/domain/position/service';

export const Input = positionPayload;
export const Output = ZodResponse(null);

const _services = new PositionService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	await _services.save(payload);

	const response = Output.parse(
		composeResponse({ data: { message: 'Create successfully' } })
	) as OurResponse<any>;

	return response;
});