import { z } from 'sveltekit-api';

export const companySchema = z.object({
	id: z.string().nullable().optional(),
	name: z.string().min(1, { message: 'Name cannot be empty' }),
	address: z.string().min(1, { message: 'Address cannot be empty' }),
	code: z.string().min(1, { message: 'Code cannot be empty' }),
	logoUri: z.any().nullable()
});