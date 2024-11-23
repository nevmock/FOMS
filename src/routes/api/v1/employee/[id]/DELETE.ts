import { ZodResponse } from '$lib/server/schema/http';
import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import EmployeeService from '$lib/server/domain/employee/employee';

const Param = z.object({
	id: z.string().nullable().optional()
});
export const Output = ZodResponse(null);

const _services = new EmployeeService();

export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.delete(payload.id!);

	const response =
		records != null
			? Output.parse(composeResponse({ message: 'Delete successfully' }))
			: composeResponse({
					message: 'Delete Failed'
				});

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
