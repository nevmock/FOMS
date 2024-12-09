import { z } from 'sveltekit-api';
import { detailPositionSchema } from '$lib/server/schema/detailPosition';

export const positionSchema = z.object({
	id: z.string().nullable().optional(),
	companyId: z.string().min(1, { message: 'Company cannot be empty' }),
	basicSalary: z.number().min(1, { message: 'Basic salary cannot be empty' }),
	detailPositions: z.array(detailPositionSchema)
});
