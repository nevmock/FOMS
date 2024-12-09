import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { positionSchema } from '$lib/server/schema/position';
import PositionService from '$lib/server/domain/position/service';

export const Input = positionSchema;
export const Output = ZodResponse(null);

const _services = new PositionService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	await _services.save(payload);

	const response = Output.parse(
		composeResponse({ data: { message: 'Create successfully' } })
	) as OurResponse<any>;

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
