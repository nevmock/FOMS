import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { levelSchema } from '$lib/server/schema/level';
import LevelService from '$lib/server/domain/level/service';
import { snakeToCamel } from '$lib/server/utils/caseParser';

export const Input = levelSchema;
export const Output = ZodResponse(levelSchema);

const _services = new LevelService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	const records = await _services.save(payload);

	const response =
		records != null
			? Output.parse(snakeToCamel(composeResponse(records)))
			: composeResponse(records);

	return response;
});
