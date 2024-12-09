import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse, Query } from '$lib/server/schema/http';
import type { OurPayload } from '$lib/server/types/request';
import { snakeToCamel } from '$lib/server/utils/caseParser';
import { composeResponse } from '$lib/server/utils/response';
import type { Level } from '@prisma/client';
import type { OurResponse } from '$lib/server/types/response';
import { levelSchema } from '$lib/server/schema/level';
import LevelService from '$lib/server/domain/level/service';

const _services = new LevelService();

const Output = ZodResponse(levelSchema);
export default new Endpoint({ Query, Output }).handle(async (param) => {
	const payload = await param;

	const records = await _services.getAll(payload);

	const response =
		records != null
			? Output.parse(snakeToCamel(composeResponse(records)))
			: composeResponse(records);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
