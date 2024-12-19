import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import { ZodResponse } from '$lib/server/schema/http';
import { positionResponse, positionSchema } from '$lib/server/schema/position';
import PositionService from '$lib/server/domain/position/service';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const Param = z.object({
	id: z.string().nullable().optional()
});

const Output = ZodResponse(positionResponse);

const _services = new PositionService();
export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.getDetail(payload.id!);

	const response =
		records != null
			? Output.parse(snakeToCamel(composeResponse(records)))
			: composeResponse(records);

	return response;
});