import { ZodResponse } from '$lib/server/schema/http';
import CompanyService from '$lib/server/domain/company/service';
import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';

const Param = z.object({
	id: z.string().nullable().optional()
});
export const Output = ZodResponse(null);

const _services = new CompanyService();

export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.delete(payload.id!);

	const response =
		records != null
			? (Output.parse(composeResponse({ message: 'Delete successfully' })) as OurResponse<any>)
			: (composeResponse({
					message: 'Delete Failed'
				}) as OurResponse<any>);

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
