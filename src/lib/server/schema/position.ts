import { z } from 'sveltekit-api';
import { detailPositionSchema } from '$lib/server/schema/detailPosition';

export const positionSchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' }),
	detailPositions: z.array(detailPositionSchema)
});

export const positionPayload = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' }),
	options: z.array(
		z.object({
			levelId: z.string().min(1, { message: 'Level ID cannot be empty' }),
			officerId: z.string().min(1, { message: 'Officer ID cannot be empty' }),
			isActive: z.boolean()
		})
	)
});
