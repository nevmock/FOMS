import { ZodResponse } from '$lib/server/schema/http';
import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import PositionService from '$lib/server/domain/position/service';

const Param = z.object({
	id: z.string().nullable().optional()
});
export const Output = ZodResponse(null);

const _services = new PositionService();

export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.delete(payload.id!);

	const response =
		records != null
			? (Output.parse(composeResponse({ message: 'Delete successfully' })) as OurResponse<any>)
			: (composeResponse({
				message: 'Delete Failed'
			}) as OurResponse<any>);

	return response;
});