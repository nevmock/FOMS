import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { ZodResponse } from '$lib/server/schema/http';
import { levelSchema } from '$lib/server/schema/level';
import LevelService from '$lib/server/domain/level/service';
import type { Level } from '@prisma/client';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const Param = z.object({
	id: z.string().nullable().optional()
});

const Output = ZodResponse(levelSchema);

const _services = new LevelService();
export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.getDetail(payload.id!);

	const response =
		records != null
			? (Output.parse(snakeToCamel(composeResponse(records))) as OurResponse<Level | null>)
			: (composeResponse(records) as OurResponse<Level | null>);

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
