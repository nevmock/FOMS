import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { OurPayload } from '$lib/server/types/request';
import CompanyService from '$lib/server/domain/company/service';
import { ZodResponse, Query } from '$lib/server/schema/http';
import { companySchema } from '$lib/server/schema/company';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const _services = new CompanyService();

const Output = ZodResponse(companySchema);

export default new Endpoint({ Query, Output }).handle(async (param, { request }) => {
	const url = new URL(request.url);

	const payload = await param;

	const queryParams = Object.fromEntries(url.searchParams.entries());
	// payload.advSearch = queryParams;

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
