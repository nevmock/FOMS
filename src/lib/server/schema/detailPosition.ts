import { z } from 'sveltekit-api';
import { levelSchema } from '$lib/server/schema/level';

export const detailPositionSchema = z.object({
	id: z.string().nullable().optional(),
	// levelId: z.string().min(1, { message: 'Level ID cannot be empty' }),
	// officerId: z.string().min(1, { message: 'Officer ID cannot be empty' }),
	isActive: z.boolean(),
	level: levelSchema.optional().nullable(),
	officer: levelSchema.optional().nullable()
});
