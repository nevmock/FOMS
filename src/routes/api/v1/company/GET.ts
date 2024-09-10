import { Endpoint, error, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { OurPayload } from '$lib/server/types/request';
import CompanyService from '$lib/server/domain/company/service';
import type { Company } from '@prisma/client';

const CompanySchema = z.object({
	id: z.string().uuid().optional(),
	name: z.string(),
	address: z.string(),
	code: z.string(),
	logo_uri: z.string()
});

const Query = z.object({
	start: z.string().optional(),
	length: z.string().optional(),
	order: z.string().optional(),
	search: z.any().optional(),
	advSearch: z.any().optional(),
});

const Output = z.object({
	code: z.number(),
	status: z.string(),
	recordsTotal: z.number().optional(),
	data: z.array(CompanySchema).nullable().optional(),
	error: z.any()
})


const Error = {
	404: error(404, "Post not found"),
	403: error(403, "Forbidden"),
};

const _services = new CompanyService();
export default new Endpoint({ Query, Output }).handle(async (param) => {
	const payload = await param as OurPayload;
	const records = await _services.getAll(payload);

	const response = records != null ? Output.parse(composeResponse(records)) as OurResponse<Array<Company> | null> : composeResponse(records) as OurResponse<Array<Company> | null>

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	}) as z.infer<typeof Output>;
});