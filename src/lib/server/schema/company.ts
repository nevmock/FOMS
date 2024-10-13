import { z } from 'sveltekit-api';

export const companySchema = z.object({
	id: z.string().uuid().optional(),
	name: z.string(),
	address: z.string(),
	code: z.string(),
	logo_uri: z.string()
});
