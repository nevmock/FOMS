import { z } from 'sveltekit-api';
import { detailPositionSchema } from '$lib/server/schema/detailPosition';
import { companySchema } from '$lib/server/schema/company';

export const positionSchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' }),
	detailPositions: z.array(detailPositionSchema)
});

export const positionResponse = z.object({
	id: z.string().nullable().optional(),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' }),
	company: z.object({
		id: z.string().nullable().optional(),
		name: z.string().min(1, { message: 'Name cannot be empty' }),
		address: z.string().min(1, { message: 'Address cannot be empty' }),
		code: z.string().min(1, { message: 'Code cannot be empty' }),
		logoUri: z.any().nullable()
	}),
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
