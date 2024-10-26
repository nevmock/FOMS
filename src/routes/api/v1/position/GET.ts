import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse, Query } from '$lib/server/schema/http';
import PositionService from '$lib/server/domain/position/service';
import type { OurPayload } from '$lib/server/types/request';
import { snakeToCamel } from '$lib/server/utils/caseParser';
import { composeResponse } from '$lib/server/utils/response';
import type { Position } from '@prisma/client';
import type { OurResponse } from '$lib/server/types/response';
import { positionSchema } from '$lib/server/schema/position';

const _services = new PositionService();

const Output = ZodResponse(positionSchema);
export default new Endpoint({ Query, Output }).handle(async (param) => {
	const payload = (await param) as OurPayload;
	const records = await _services.getAll(payload);

	const response =
		records != null
			? (Output.parse(
					snakeToCamel(composeResponse(records))
				) as OurResponse<Array<Position> | null>)
			: (composeResponse(records) as OurResponse<Array<Position> | null>);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
