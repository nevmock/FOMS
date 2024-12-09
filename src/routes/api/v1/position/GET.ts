import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse, Query } from '$lib/server/schema/http';
import PositionService from '$lib/server/domain/position/service';
import { snakeToCamel } from '$lib/server/utils/caseParser';
import { composeResponse } from '$lib/server/utils/response';
import { positionResponse } from '$lib/server/schema/position';

const _services = new PositionService();

const Output = ZodResponse(positionResponse);
export default new Endpoint({ Query, Output }).handle(async (param, { request }) => {
	const url = new URL(request.url);

	const payload = await param;
	const queryParams = Object.fromEntries(url.searchParams.entries());

	if (queryParams) {
		payload['advSearch'] = queryParams;
	}

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
