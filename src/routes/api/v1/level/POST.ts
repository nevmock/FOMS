import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { levelSchema } from '$lib/server/schema/level';
import LevelService from '$lib/server/domain/level/service';

export const Input = levelSchema;
export const Output = ZodResponse(null);

const _services = new LevelService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	await _services.save(payload);

	// const response =
	// 	records != null
	// 		? (Output.parse(composeResponse({ message: 'Create successfully' })) as OurResponse<any>)
	// 		: (composeResponse({
	// 				message: 'Create Failed'
	// 			}) as OurResponse<any>);

	const response = Output.parse(
		composeResponse({ message: 'Create successfully' })
	) as OurResponse<any>;

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
