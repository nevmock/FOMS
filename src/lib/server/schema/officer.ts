import { z } from 'sveltekit-api';

export const officerSchema = z.object({
	id: z.string().nullable().optional(),
	// positionId: z.string().min(1, { message: 'Position ID cannot be empty' }),
	name: z.string().min(1, { message: 'Name cannot be empty' })
});
