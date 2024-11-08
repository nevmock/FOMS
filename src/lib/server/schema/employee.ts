import { z } from 'sveltekit-api';

export const employeeSchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	positionId: z.string().min(1, { message: 'Level position cannot be empty' }),
	nip: z.string().min(1, { message: 'NIP cannot be empty' }),
	name: z.string().min(1, { message: 'Name cannot be empty' }),
	tmt: z.string().min(1, { message: 'TMT cannot be empty' }),
	gender: z.string().min(1, { message: 'Gender cannot be empty' }),
	whatsapp: z.string().min(1, { message: 'Whatsapp cannot be empty' }),
	email: z.string().min(1, { message: 'Email cannot be empty' })
});
