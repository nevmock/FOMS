import { Endpoint, z } from 'sveltekit-api';
import { ZodResponse } from '$lib/server/schema/http';
import fs from 'fs/promises';
import path from 'path';
import { Buffer } from 'buffer';
import { composeResponse } from '$lib/server/utils/response';
import type { OurResponse } from '$lib/server/types/response';
import type { Company } from '@prisma/client';
import CompanyService from '$lib/server/domain/company/service';
import { camelToSnake } from '$lib/server/utils/caseParser';

export const Input = z.object({
	id: z.string().nullable().optional(),
	name: z.string().min(1, { message: 'Name cannot be empty' }),
	address: z.string().min(1, { message: 'Address cannot be empty' }),
	code: z.string().min(1, { message: 'Code cannot be empty' }),
	logoUri: z.any().nullable()
});
export const Output = ZodResponse(null);

const _services = new CompanyService();

export default new Endpoint({ Input, Output }).handle(async (param) => {
	const payload = Input.parse(param);

	let filePath: string = '';

	if (payload.logoUri) {
		const logoBlob = payload.logoUri as Blob;
		const fileExtension = logoBlob.type.split('/')[1];
		const fileName = `${crypto.randomUUID()}.${fileExtension}`;

		filePath = path.join('static', 'company', 'logo', fileName);
		await fs.writeFile(filePath, Buffer.from(await logoBlob.arrayBuffer()));
		payload.logoUri = filePath.split('static')[1];
	} else {
		payload.logoUri = '/company/logo/default.jpg';
	}

	console.info(payload);
	const records = _services.save(camelToSnake(payload) as Company).then(async (v) => {
		if (!v && payload.logoUri) {
			await fs.unlink(filePath);
		}
	});

	const response =
		records != null
			? (Output.parse(composeResponse({ message: 'Create successfully' })) as OurResponse<any>)
			: (composeResponse({
					message: 'Create Failed'
				}) as OurResponse<any>);

	return new Response(JSON.stringify(response), {
		headers: {
			'Content-Type': 'application/json'
		}
	}) as z.infer<typeof Output>;
});
