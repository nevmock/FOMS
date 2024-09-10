import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { OurPayload } from '$lib/server/types/request';
import CompanyService from '$lib/server/domain/company/service';
import type { Company } from '@prisma/client';

export const Input = z.object({
	id: z.string().optional(),
	name: z.string(),
	address: z.string(),
	code: z.string(),
	logo_uri: z.any(),
});

const _services = new CompanyService();
export default new Endpoint({ Input }).handle(async (param) => {
	// console.info(param)
	const records = await _services.save(param as Company);

	return new Response(JSON.stringify(composeResponse([{ message: "testt" }])), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	}) as OurResponse<typeof param>
});