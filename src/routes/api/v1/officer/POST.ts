import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { officerSchema } from '$lib/server/schema/officer';
import OfficerService from '$lib/server/domain/officer/service';
import { snakeToCamel } from '$lib/server/utils/caseParser';

export const Input = officerSchema;
export const Output = ZodResponse(officerSchema);

const _services = new OfficerService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	const records = await _services.save(payload);

	// const response =
	// 	records != null
	// 		? (Output.parse(composeResponse({ message: 'Create successfully' })) as OurResponse<any>)
	// 		: (composeResponse({
	// 				message: 'Create Failed'
	// 			}) as OurResponse<any>);

	const response =
		records != null
			? Output.parse(snakeToCamel(composeResponse(records)))
			: composeResponse(records);

	return response;
});
