import { Endpoint, error, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { OurPayload } from '$lib/server/types/request';
import CompanyService from '$lib/server/domain/company/service';
import type { Company } from '@prisma/client';
import { ZodResponse, Query } from '$lib/server/schema/http';
import { companySchema } from '$lib/server/schema/company';
console.info('GET HITTTED');

const _services = new CompanyService();

const Output = ZodResponse(companySchema);

export default new Endpoint({ Query, Output }).handle(async (param) => {
	const payload = (await param) as OurPayload;
	const records = await _services.getAll(payload);

	const response =
		records != null
			? (Output.parse(composeResponse(records)) as OurResponse<Array<Company> | null>)
			: (composeResponse(records) as OurResponse<Array<Company> | null>);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
