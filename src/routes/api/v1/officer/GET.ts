import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse, Query } from '$lib/server/schema/http';
import type { OurPayload } from '$lib/server/types/request';
import { snakeToCamel } from '$lib/server/utils/caseParser';
import { composeResponse } from '$lib/server/utils/response';
import type { Level } from '@prisma/client';
import type { OurResponse } from '$lib/server/types/response';
import { officerSchema } from '$lib/server/schema/officer';
import OfficerService from '$lib/server/domain/officer/service';

const _services = new OfficerService();

const Output = ZodResponse(officerSchema);
export default new Endpoint({ Query, Output }).handle(async (param) => {
	const payload = (await param) as OurPayload;
	const records = await _services.getAll(payload);

	const response =
		records != null
			? (Output.parse(
					snakeToCamel(composeResponse(records))
				) as OurResponse<Array<Level> | null>)
			: (composeResponse(records) as OurResponse<Array<Level> | null>);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
