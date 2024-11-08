import { z } from 'sveltekit-api';

export const positionSchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	levelId: z.string().min(1, { message: 'Level cannot be empty' }),
	officerId: z.string().min(1, { message: 'Officer cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' })
});
