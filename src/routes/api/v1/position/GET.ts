import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse, Query } from '$lib/server/schema/http';
import PositionService from '$lib/server/domain/position/service';
import { snakeToCamel } from '$lib/server/utils/caseParser';
import { composeResponse } from '$lib/server/utils/response';
import { positionResponse } from '$lib/server/schema/position';
import type { OurPayload } from '$lib/server/types/request';

const _services = new PositionService();

const Output = ZodResponse(positionResponse);
export default new Endpoint({ Query, Output }).handle(async (param, { request }) => {
	const url = new URL(request.url);

	const payload: OurPayload | undefined = (await param) as OurPayload;
	const queryParams = Object.fromEntries(url.searchParams.entries());

	if (queryParams?.advSearch) {
		payload['advSearch'] = queryParams.advSearch;
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
	});
});