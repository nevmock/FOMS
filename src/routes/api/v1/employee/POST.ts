import { Endpoint, RouteModifier, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import { employeeSchema } from '$lib/server/schema/employee';
import EmployeeService from '$lib/server/domain/employee/employee';
import type { Employee } from '@prisma/client';

export const Input = employeeSchema;
export const Output = ZodResponse(null);

const _services = new EmployeeService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	console.info(JSON.stringify(payload as Employee));
	await _services.save(payload as Employee);

	// const response =
	// 	records != null
	// 		? (Output.parse(composeResponse({ message: 'Create successfully' })) as OurResponse<any>)
	// 		: (composeResponse({
	// 				message: 'Create Failed'
	// 			}) as OurResponse<any>);

	const response = Output.parse(
		composeResponse({ message: 'Create successfully' })
	) as OurResponse<any>;

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
