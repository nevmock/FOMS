import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { OurPayload } from '$lib/server/types/request';
import CompanyService from '$lib/server/domain/company/service';

const Param = z.object({
	id: z.string(),
});

const _services = new CompanyService();
export default new Endpoint({ Param }).handle(async (param) => {
	const records = await _services.getDetail(param.id);

	return new Response(JSON.stringify(composeResponse(records)), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	}) as OurResponse<typeof param>
});