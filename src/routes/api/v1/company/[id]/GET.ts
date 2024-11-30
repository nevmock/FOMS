import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import CompanyService from '$lib/server/domain/company/service';
import { ZodResponse } from '$lib/server/schema/http';
import { companySchema } from '$lib/server/schema/company';
import type { Company } from '@prisma/client';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const Param = z.object({
	id: z.string().nullable().optional()
});

const Output = ZodResponse(companySchema);

const _services = new CompanyService();
export default new Endpoint({ Param, Output }).handle(async (param, { request }) => {
	const payload = Param.parse(param);
	const url = new URL(request.url);
	const queryParams = Object.fromEntries(url.searchParams.entries());

	console.info('Received query parameters:', queryParams);
	const params = Param.parse(queryParams);
	console.info(params);

	const records = await _services.getDetail(payload.id!);
	console.info(records);

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
