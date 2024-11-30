import { z } from 'sveltekit-api';

export const salarySchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	level: z.string().min(1, { message: 'Level cannot be empty' }),
	officer: z.string().min(1, { message: 'Officer cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' })
});
