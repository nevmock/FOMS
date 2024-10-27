import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { ZodResponse } from '$lib/server/schema/http';
import { positionSchema } from '$lib/server/schema/position';
import PositionService from '$lib/server/domain/position/service';
import type { Position } from '@prisma/client';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const Param = z.object({
	id: z.string().nullable().optional()
});

const Output = ZodResponse(positionSchema);

const _services = new PositionService();
export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.getDetail(payload.id!);

	const response =
		records != null
			? (Output.parse(snakeToCamel(composeResponse(records))) as OurResponse<Position | null>)
			: (composeResponse(records) as OurResponse<Position | null>);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
