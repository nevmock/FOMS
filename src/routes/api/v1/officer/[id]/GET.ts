import { Endpoint, z } from 'sveltekit-api';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { ZodResponse } from '$lib/server/schema/http';
import { officerSchema } from '$lib/server/schema/officer';
import OfficerService from '$lib/server/domain/officer/service';
import type { Officer } from '@prisma/client';
import { snakeToCamel } from '$lib/server/utils/caseParser';

const Param = z.object({
	id: z.string().nullable().optional()
});

const Output = ZodResponse(officerSchema);

const _services = new OfficerService();
export default new Endpoint({ Param, Output }).handle(async (param) => {
	const payload = Param.parse(param);
	const records = await _services.getDetail(payload.id!);

	const response =
		records != null
			? Output.parse(snakeToCamel(composeResponse(records)))
			: composeResponse(records);

	return response;
});
